import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container, Text } from "./styles";

export function Profile() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        drawerIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        title: "Perfil",
      });
    }, [])
  );

  return (
    <Container>
      <Text>Perfil</Text>
    </Container>
  );
}
