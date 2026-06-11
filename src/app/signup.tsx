import { Link } from "expo-router";
import {
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
            source={require("../assets/image2.jpg")}
            style={styles.ilustration}
          />
          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>
            Cadastre sua conta informando os seguintes dados
          </Text>
          <View style={styles.form}>
            <Input placeholder="Nome"></Input>
            <Input placeholder="E-mail" keyboardType="email-address"></Input>
            <Input placeholder="Senha" secureTextEntry></Input>
            <Input placeholder="Confirme sua senha" secureTextEntry></Input>
            <Button label="Cadastrar"></Button>
          </View>
          <Text style={styles.footerText}>
            Já possui uma conta?{" "}
            <Link style={styles.footerLink} href="/">
              Entre aqui
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
