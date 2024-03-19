export type LoginRequest = {
  username: string;
  password: string;
  grant_type: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  usuario_id: string;
  usuario_nome: string;
  nivel_id: string;
  Login: string;
  Nivel_Nome: string;
  Pessoa_Id: string;
  DashboardPermissao: string;
  ImobiliariasIds: string;
  issued: Date;
  expires: Date;
};
