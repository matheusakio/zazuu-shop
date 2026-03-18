import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabs } from "./app-tabs";
import { RootAppStackParamList } from "../types/navigation";
import { ProductDetailsScreen } from "../screens/app/product-details/index";
import { EditProductScreen } from "../screens/app/edit-product/index";

const Stack = createNativeStackNavigator<RootAppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
