import { ReactNode } from "react";
import { AxiosResponse } from "axios";

export type AuthProviderProps = {
  children: ReactNode;
};

export type FormData = {
  email: string;
  password: string;
};

export type IAuthContextData = {
  userData: UserData;
  authTokenStorageKey: string;
  userDataStorageKey: string;
  setUser(user: UserData): void;
  login(form: FormData): Promise<AxiosResponse<any, any>>;
  logout(): Promise<void>;
};

export type UserData = {
  expires_in: number;
  usuario_id: string;
  usuario_nome: string;
  nivel_id: string;
  Login: string;
  Nivel_Nome: string;
  Pessoa_Id: string;
  DashboardPermissao: string;
  ImobiliariasIds: string;
};
