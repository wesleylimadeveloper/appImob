import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
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
