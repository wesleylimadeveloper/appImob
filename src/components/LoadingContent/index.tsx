import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function LoadingContent() {
  const THEME = useTheme();

  return (
    <Container>
      <ActivityIndicator color={THEME.colors.primary} size="large" />
    </Container>
  );
}
