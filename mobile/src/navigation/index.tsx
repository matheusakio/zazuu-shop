import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "../store/auth-store";
import { AuthStack } from "./auth-stack";
import { AppStack } from "./app-stack";
import { SplashScreen } from "../screens/splash";

export function Navigation() {
  const token = useAuthStore((state) => state.token);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  if (!hasHydrated) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
