import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/auth-context";

export default function HomeScreen() {
  const { userEmail, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido 🎉</Text>
      <Text style={styles.email}>{userEmail}</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
});