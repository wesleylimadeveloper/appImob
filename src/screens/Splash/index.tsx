import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { useAuth } from "../../hooks/useAuth";

import { Scroll, Container, Logo } from "./styles";

export function Splash() {
  const navigation = useNavigation();
  const THEME = useTheme();

  const { authTokenStorageKey, userDataStorageKey, setUser } = useAuth();

  async function getAuthToken() {
    const authToken = await AsyncStorage.getItem(authTokenStorageKey);
    const user = await AsyncStorage.getItem(userDataStorageKey);

    if (authToken && user) {
      setUser(JSON.parse(user));

      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" as never }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "Auth" as never }],
      });
    }
  }

  useEffect(() => {
    getAuthToken();
  }, []);

  return (
    <Scroll>
      <Container>
        <Logo source={require("../../assets/logo.png")} resizeMode="center" />

        <ActivityIndicator color={THEME.colors.primary} size="large" />
      </Container>
    </Scroll>
  );
}
