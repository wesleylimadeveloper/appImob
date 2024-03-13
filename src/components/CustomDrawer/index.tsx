import {
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { Container, Header, Logo } from "./styles";

export function CustomDrawer(props: DrawerContentComponentProps) {
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
      </DrawerContentScrollView>
    </Container>
  );
}
