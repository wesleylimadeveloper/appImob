import { FontAwesome } from "@expo/vector-icons";
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
  const THEME = useTheme();

  const { logout } = useAuth();

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
          onPress={logout}
        />
      </DrawerContentScrollView>
    </Container>
  );
}
