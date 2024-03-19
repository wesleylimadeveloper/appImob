import axios from "axios";

const api = axios.create({
  baseURL: "https://api.imobiliariasistema.com.br/api/",
});

export default api;
