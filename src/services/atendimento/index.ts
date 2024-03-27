import api from "../api";

export async function getAttendanceQuantity(
  pessoaID: string,
  tipoFaseAtendimento: string
) {
  const response = await api.get(
    `atendimentos/novo/recuperar/quantidade/porpessoaefaseatendimento?pagina=0&pessoaId=${pessoaID}&tipoDeFaseAtendimento=${tipoFaseAtendimento}`
  );

  return response;
}

export async function getAttendances(
  pessoaID: string,
  tipoFaseAtendimento: string
) {
  const response = await api.get(
    `atendimentos/novo/recuperar/porpessoaefaseatendimento?pagina=1&pessoaId=${pessoaID}&tipoDeFaseAtendimento=${tipoFaseAtendimento}`
  );

  return response;
}
