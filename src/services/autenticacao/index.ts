import api from "../api";

export async function login(request: string) {
  const headers = {
    "Appimob-Cliente-Hash": "C5A55C40-8915-4ED0-960D-B1514FE2E2B9",
    "content-type": "application/x-www-form-urlencoded",
  };

  const response = await api.post("autenticacao/usuario", request, {
    headers,
  });

  return response;
}
