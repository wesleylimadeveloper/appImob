import React from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-native-toast-notifications";
import { RFValue } from "react-native-responsive-fontsize";

import { AuthProvider } from "./hooks/useAuth";

import { Routes } from "./routes";

import THEME from "./global/styles/theme";

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
      <ToastProvider
        animationDuration={100}
        duration={3500}
        placement="top"
        textStyle={{
          fontSize: RFValue(12),
          fontFamily: THEME.fonts.title,
          textAlign: "center",
        }}
        dangerColor={THEME.colors.danger}
        successColor={THEME.colors.success}
        warningColor={THEME.colors.warning}
      >
        <AuthProvider>
          <StatusBar
            backgroundColor={THEME.colors.primary}
            barStyle="light-content"
          />
          <Routes />
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
