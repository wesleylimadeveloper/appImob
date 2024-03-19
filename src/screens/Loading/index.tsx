import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useTheme } from "styled-components/native";

import { Scroll, Container, Logo } from "./styles";

export function Loading() {
  const THEME = useTheme();

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");

    return () => {
      NavigationBar.setVisibilityAsync("visible");
    };
  }, []);

  return (
    <Scroll
      contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <Container>
        <Logo source={require("../../assets/logo.png")} resizeMode="center" />

        <ActivityIndicator color={THEME.colors.primary} size="large" />
      </Container>
    </Scroll>
  );
}
