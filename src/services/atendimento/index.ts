import api from "../api";

export async function getAttendanceQuantity(pessoaID: string) {
  const response = await api.get(
    `atendimentos/novo/recuperar/quantidade/porpessoaefaseatendimento?pagina=0&pessoaId=${pessoaID}&tipoDeFaseAtendimento=1`
  );

  return response;
}

export async function getAttendances(pessoaID: string, tipoFaseAtendimento: number) {
  const response = await api.get(
    `atendimentos/novo/recuperar/porpessoaefaseatendimento?pagina=1&pessoaId=${pessoaID}&tipoDeFaseAtendimento=${tipoFaseAtendimento}`
  );

  return response;
}
