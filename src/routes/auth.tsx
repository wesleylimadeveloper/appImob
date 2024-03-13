import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { Login } from "../screens/Login";

export function Auth() {
  const THEME = useTheme();

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.primary,
        },
        headerTintColor: THEME.colors.gray_light,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: THEME.fonts.title,
          fontSize: THEME.fontSize.larger,
        },
      }}
    >
      <Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
