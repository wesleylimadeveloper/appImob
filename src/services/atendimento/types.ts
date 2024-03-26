export type GetAttendanceQuantityResponse = {
  key: string;
  value: number;
};

export type Envolvido = {
  id: number;
  nome: string;
  foto?: string;
};

export type GetAttendancesResponse = {
  atendimentoId: number;
  imobiliariaId: number;
  duplicadoDetalhes: string;
  temperaturaDoCliente: number;
  tipoDeAtendimentoFormaDeContato: number;
  tipoDeAtendimentoFormaDeAtivacao: number;
  tipoDeAtendimentoFase: number;
  tipoDeAtendimentoFinalidade: number;
  tipoDeAtendimentoRepescagem?: number;
  dataDeCadastro: Date;
  dataDeAtualizacao?: Date;
  dataDoProximoContato?: Date;
  contatoNome: string;
  contatoTelefone: string;
  contatoTelefone2: string;
  contatoTelefone3: string;
  contatoCelular: string;
  contatoCelular2: string;
  contatoCelular3: string;
  historicoResponsavelNome: string;
  historicoDescricao: string;
  historicoDataDeCadastro: Date;
  possuiImovel: boolean;
  valorDeVenda: number;
  valorDeAluguel: number;
  envolvidos: Envolvido[];
};
