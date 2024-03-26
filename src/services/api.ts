import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://api.imobiliariasistema.com.br/api/",
});

api.interceptors.request.use(
  async (config) => {
    const authTokenStorage = await AsyncStorage.getItem("@appImob:auth_token");

    if (authTokenStorage) {
      const token = JSON.parse(authTokenStorage);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default api;
