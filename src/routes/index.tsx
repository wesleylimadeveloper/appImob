import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash";
import { Auth } from "./auth";
import { Dashboard } from "./dashboard";

export function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen component={Splash} name="Splash" />
        <Screen component={Auth} name="Auth" />
        <Screen component={Dashboard} name="Dashboard" />
      </Navigator>
    </NavigationContainer>
  );
}
