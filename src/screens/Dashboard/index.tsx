import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container, Text } from "./styles";

export function Dashboard() {
  const navigation = useNavigation();

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
      <Text>Dashboard</Text>
    </Container>
  );
}
