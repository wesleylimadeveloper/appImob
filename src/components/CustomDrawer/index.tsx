import { Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useTheme } from "styled-components/native";

import { useAuth } from "../../hooks/useAuth";

import { Container, Header, Logo } from "./styles";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const navigation = useNavigation();
  const THEME = useTheme();

  const { logout } = useAuth();

  async function handleConfirmLogout() {
    navigation.reset({
      index: 0,
      routes: [{ name: "Auth" as never }],
    });

    await logout();
  }

  async function handleLogout() {
    Alert.alert("Sair", "Sair da sua conta?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => await handleConfirmLogout(),
      },
    ]);
  }

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <Header>
          <Logo
            source={require("../../assets/appimob.png")}
            resizeMode="contain"
          />
        </Header>

        <DrawerItemList {...props} />

        <DrawerItem
          icon={({ size }) => (
            <FontAwesome
              name="sign-out"
              color={THEME.colors.danger}
              size={size}
            />
          )}
          label="Sair"
          labelStyle={{
            color: THEME.colors.danger,
            fontFamily: THEME.fonts.text,
          }}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>
    </Container>
  );
}
