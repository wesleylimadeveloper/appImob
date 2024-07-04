import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import qs from "qs";

import { login as loginService } from "../../services/autenticacao";

import { LoginRequest, LoginResponse } from "../../services/autenticacao/types";
import {
  AuthProviderProps,
  FormData,
  IAuthContextData,
  UserData,
} from "./types";

const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserData>({} as UserData);

  const authTokenStorageKey = "@appImob:auth_token";
  const userDataStorageKey = "@appImob:user_data";

  function setUser(user: UserData) {
    setUserData(user);
  }

  async function login(form: FormData) {
    const { email, password } = form;

    const request: LoginRequest = {
      username: email,
      password,
      grant_type: "password",
    };

    const response = await loginService(qs.stringify(request));

    if (response.status === 200) {
      const data: LoginResponse = response.data;

      const {
        access_token,
        expires_in,
        usuario_id,
        usuario_nome,
        nivel_id,
        Login,
        Nivel_Nome,
        Pessoa_Id,
        DashboardPermissao,
        ImobiliariasIds,
      } = data;

      const user: UserData = {
        expires_in,
        usuario_id,
        usuario_nome,
        nivel_id,
        Login,
        Nivel_Nome,
        Pessoa_Id,
        DashboardPermissao,
        ImobiliariasIds,
      };

      await AsyncStorage.setItem(
        authTokenStorageKey,
        JSON.stringify(access_token)
      );

      await AsyncStorage.setItem(userDataStorageKey, JSON.stringify(user));

      setUserData(user);
    }

    return response;
  }

  async function logout() {
    await AsyncStorage.clear();
    setUserData({} as UserData);
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        authTokenStorageKey,
        userDataStorageKey,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
