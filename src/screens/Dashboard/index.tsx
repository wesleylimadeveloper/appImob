import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Header,
  Avatar,
  InitialLetter,
  Greetings,
  Title,
  Subtitle,
} from "./styles";

export function Dashboard() {
  const { userData } = useAuth();
  const { usuario_nome } = userData;

  const navigation = useNavigation();

  const initialLetter = usuario_nome[0].toUpperCase();

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        drawerIcon: ({ color, size }) => (
          <Ionicons name="pie-chart" color={color} size={size} />
        ),
        title: "Dashboard",
      });
    }, [])
  );

  return (
    <Container>
      <Header>
        <Avatar>
          <InitialLetter>{initialLetter}</InitialLetter>
        </Avatar>

        <Greetings>
          <Title>Olá, {usuario_nome}</Title>

          <Subtitle>Bem-vindo(a) ao appImob</Subtitle>
        </Greetings>
      </Header>
    </Container>
  );
}
