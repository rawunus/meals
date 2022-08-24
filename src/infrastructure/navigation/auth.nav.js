import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import LoginScreen from "../../features/auth/screens/LoginScreen";
import AuthScreen from "../../features/auth/screens/AuthScreen";
import RegisterScreen from "../../features/auth/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
