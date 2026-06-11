import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email.trim() || !password.trim()) {
      return Alert.alert("Preencha e-mail e senha para prosseguir.");
    }
    Alert.alert("Bem-vindo", `Login Realizado com ${email}`);
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("../assets/images.jpeg")}
            style={styles.ilustration}
          />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha
          </Text>
          <View style={styles.form}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
            ></Input>
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
            ></Input>
            <Button label="Entrar" onPress={handleSignIn}></Button>
          </View>
          <Text style={styles.footerText}>
            Não possui uma conta?{" "}
            <Link style={styles.footerLink} href="/signup">
              Cadastre-se aqui
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  ilustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 16,
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  footerText: {
    marginTop: 16,
    fontSize: 16,
  },
  footerLink: {
    color: "#2b43af",
  },
});
