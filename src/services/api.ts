import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://api.imobiliariasistema.com.br/api/",
});

api.interceptors.request.use(
  async (config) => {
    const userStorage = await AsyncStorage.getItem("@appImob:auth_token");

    if (userStorage) {
      const user = JSON.parse(userStorage);
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default api;
