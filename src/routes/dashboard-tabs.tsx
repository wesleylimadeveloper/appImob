import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Dashboard } from "../screens/Dashboard";
import { Profile } from "../screens/Profile";

export function DashboardTabs() {
  const THEME = useTheme();

  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#93CBC0",
        tabBarLabelStyle: {
          fontFamily: THEME.fonts.text,
          fontSize: THEME.fontSize.smaller,
          marginBottom: 2,
        },
        tabBarStyle: {
          backgroundColor: THEME.colors.light,
          borderTopColor: THEME.colors.primary,
        },
      }}
    >
      <Screen
        component={Dashboard}
        name="Dashboard"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart" color={color} size={size} />
          ),
          title: "Dashboard",
        }}
      />

      <Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          title: "Perfil",
        }}
      />
    </Navigator>
  );
}
