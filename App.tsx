import React from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";

import THEME from "./src/global/styles/theme";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  NavigationBar.setBackgroundColorAsync(THEME.colors.primary);

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        backgroundColor={THEME.colors.primary}
        barStyle="light-content"
      />
      <Routes />
    </ThemeProvider>
  );
}
