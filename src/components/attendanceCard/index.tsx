import React from "react";
import { Linking } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { phoneFormat } from "../../utils/phoneFormat";
import { dateFormat } from "../../utils/dateFormat";
import { valueFormat } from "../../utils/valueFormat";
import { calculateElapsedTime } from "../../utils/calculateElapsedTime";

import { AttendanceCardProps } from "./types";
import {
  Container,
  Header,
  ID,
  Temperature,
  Contact,
  ContactInfo,
  CallButton,
  CallButtonText,
  Title,
  Text,
  DateInfo,
  SaleInfo,
  SaleValue,
  Involved,
  InvolvedAvatar,
  InvolvedInitialLetterContainer,
  InvolvedInitialLetter,
  ContactMessage,
  ContactMessageUnderline,
  DescriptionHistory,
  Footer,
} from "./styles";

export function AttendanceCard({
  atendimentoId,
  temperaturaDoCliente,
  contatoNome,
  contatoTelefone,
  contatoTelefone2,
  contatoTelefone3,
  contatoCelular,
  contatoCelular2,
  contatoCelular3,
  dataDeCadastro,
  valorDeVenda,
  envolvidos,
  historicoDescricao,
  historicoDataDeCadastro,
  historicoResponsavelNome,
}: AttendanceCardProps) {
  const THEME = useTheme();

  function showTemperature() {
    const temperatureIcons = [];

    for (let i = 0; i < temperaturaDoCliente; i++) {
      temperatureIcons.push(
        <FontAwesome5
          color={THEME.colors.danger}
          key={i}
          name="fire"
          size={RFValue(16)}
        />
      );
    }
    return temperatureIcons;
  }

  function handleCall(phoneNumber: string) {
    Linking.openURL(`tel:${phoneNumber}`);
  }

  function showInvolved() {
    return envolvidos.map((item) =>
      item.foto ? (
        <InvolvedAvatar key={item.id} source={{ uri: item.foto }} />
      ) : (
        <InvolvedInitialLetterContainer key={item.id}>
          <InvolvedInitialLetter>{item.nome[0]}</InvolvedInitialLetter>
        </InvolvedInitialLetterContainer>
      )
    );
  }

  return (
    <Container>
      <Header>
        <ID>{atendimentoId}</ID>
        <Temperature>{showTemperature()}</Temperature>
      </Header>

      <Title>{contatoNome}</Title>

      {contatoTelefone && (
        <Contact>
          <ContactInfo>
            <Text>{phoneFormat(contatoTelefone)}</Text>

            <CallButton onPress={() => handleCall(contatoTelefone)}>
              <CallButtonText>Ligar</CallButtonText>
            </CallButton>
          </ContactInfo>
        </Contact>
      )}

      {contatoTelefone2 && (
        <Contact>
          <ContactInfo>
            <Text>{phoneFormat(contatoTelefone2)}</Text>

            <CallButton onPress={() => handleCall(contatoTelefone2)}>
              <CallButtonText>Ligar</CallButtonText>
            </CallButton>
          </ContactInfo>
        </Contact>
      )}

      {contatoTelefone3 && (
        <Contact>
          <ContactInfo>
            <Text>{phoneFormat(contatoTelefone3)}</Text>

            <CallButton onPress={() => handleCall(contatoTelefone3)}>
              <CallButtonText>Ligar</CallButtonText>
            </CallButton>
          </ContactInfo>
        </Contact>
      )}

      {contatoCelular && (
        <Contact>
          <ContactInfo>
            <Text>{phoneFormat(contatoCelular)}</Text>

            <CallButton onPress={() => handleCall(contatoCelular)}>
              <CallButtonText>Ligar</CallButtonText>
            </CallButton>
          </ContactInfo>
        </Contact>
      )}

      {contatoCelular2 && (
        <Contact>
          <ContactInfo>
            <Text>{phoneFormat(contatoCelular2)}</Text>

            <CallButton onPress={() => handleCall(contatoCelular2)}>
              <CallButtonText>Ligar</CallButtonText>
            </CallButton>
          </ContactInfo>
        </Contact>
      )}

      {contatoCelular3 && (
        <Contact>
          <ContactInfo>
            <Text>{phoneFormat(contatoCelular3)}</Text>

            <CallButton onPress={() => handleCall(contatoCelular3)}>
              <CallButtonText>Ligar</CallButtonText>
            </CallButton>
          </ContactInfo>
        </Contact>
      )}

      <DateInfo>
        <Ionicons
          color={THEME.colors.dark_dark}
          name="calendar-clear"
          size={RFValue(16)}
        />
        <Title>
          {dateFormat(new Date(dataDeCadastro))} -{" "}
          {calculateElapsedTime(new Date(dataDeCadastro))}
        </Title>
      </DateInfo>

      <SaleInfo>
        VGV Potencial - <SaleValue>{valueFormat(valorDeVenda)}</SaleValue>
      </SaleInfo>

      {envolvidos.length > 0 && <Involved>{showInvolved()}</Involved>}

      <ContactMessage>Entrar em contato</ContactMessage>
      <ContactMessageUnderline />

      <DescriptionHistory>Último histórico</DescriptionHistory>
      <Text>{historicoDescricao}</Text>

      <Footer>
        <Text>{calculateElapsedTime(new Date(historicoDataDeCadastro))}</Text>
        {historicoResponsavelNome && <Text>{historicoResponsavelNome}</Text>}
      </Footer>
    </Container>
  );
}
