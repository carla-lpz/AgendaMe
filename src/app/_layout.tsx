import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from "expo-router";
import { useAuth } from "../context/auth-context";
import HomeScreen from "./home";
import LoginScreen from "./login";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}