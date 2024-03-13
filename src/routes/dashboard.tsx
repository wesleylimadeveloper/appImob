import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "styled-components/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { CustomDrawer } from "../components/CustomDrawer";

import { Tabs } from "./tabs";
import { Support } from "../screens/Support";

export function Dashboard() {
  const THEME = useTheme();

  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: THEME.colors.primary,
        drawerActiveTintColor: THEME.colors.light,
        drawerInactiveTintColor: THEME.colors.primary,
        drawerLabelStyle: {
          fontFamily: THEME.fonts.text,
          fontSize: THEME.fontSize.normal,
        },
        drawerStyle: {
          width: "65%",
        },
        drawerType: "slide",
        headerRightContainerStyle: {
          paddingRight: 24,
        },
        headerStyle: {
          backgroundColor: THEME.colors.primary,
        },
        headerTintColor: THEME.colors.light,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: THEME.fonts.title,
          fontSize: THEME.fontSize.larger,
        },
      }}
    >
      <Screen
        component={Tabs}
        name="Tabs"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="pie-chart" color={color} size={size} />
          ),
          title: "Dashboard",
        }}
      />

      <Screen
        component={Support}
        name="Support"
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="headphones" color={color} size={size} />
          ),
          title: "Atendimentos",
        }}
      />
    </Navigator>
  );
}
