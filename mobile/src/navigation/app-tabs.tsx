import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/app/home/index";
import { CreateProductScreen } from "../screens/app/create-product/index";
import { ProfileScreen } from "../screens/app/profile/index";
import { useTheme } from "styled-components/native";
import { RootAppTabsParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<RootAppTabsParamList>();

export function AppTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#cdd345",
        tabBarInactiveTintColor: "#a4b899",
        tabBarStyle: {
          height: 72,
          paddingTop: 12,
          paddingBottom: 50,
          borderTopWidth: 0,
          backgroundColor: theme.colors.surface,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "HomeTab") {
            return <Ionicons name="home-outline" size={size} color={color} />;
          }

          if (route.name === "CreateProductTab") {
            return (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            );
          }

          return <Ionicons name="person-outline" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: "Produtos" }}
      />
      <Tab.Screen
        name="CreateProductTab"
        component={CreateProductScreen}
        options={{ title: "Novo" }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}
