import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from "../context/auth-context";

export default function LoginScreen() {
    const {login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleLogin = () => {
       console.log("[LoginScreen] handleLogin", email, password);
        if (!validateEmail(email)) {
            console.error("[LoginScreen] Email inválido");
            return;
        }
        if (password.length < 6) {
            console.error("[LoginScreen] Contraseña corta");
            return;
        }

        console.log("[LoginScreen] autenticando...");
        login(email);
    };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.input}>Login</Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize='none'/>
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

