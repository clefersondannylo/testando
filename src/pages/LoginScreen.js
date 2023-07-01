import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <LinearGradient
        colors={["#0085ff", "#223333"]}
        style={styles.linearGradient}
      >
        <View>
          <Text style={styles.title}>SMART</Text>
          <Text style={styles.subtitle}>UBS</Text>
        </View>
        <View>
          <Text style={styles.information}>
           Esta versão está desatualizada.
          </Text>
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Endereço de E-mail"
          ></TextInput>
          <View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.passwordInput}
              placeholder="Senha"
            ></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Só lamento !!!")}>
            <Text style={styles.forgetPassword}>Esqueceu a senha ?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.footerInformation}>
            Ao realizar login você concorda com nossos{" "}
            <Text style={{ color: "#0085ff" }}> termos e condições</Text> e com
            nossa{" "}
            <Text style={{ color: "#0085ff" }}> Política de Privacidade</Text>.
          </Text>
        </View>
        <Text>{email}</Text>
        <Text>{password}</Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 30.8,
    textAlign: "center",
    color: "#fff",
    fontFamily: "SpaceGrotesk-Bold",
    marginTop: 45,
  },
  subtitle: {
    fontSize: 122,
    textAlign: "center",
    color: "#fff",
    fontFamily: "SpaceGrotesk-Bold",
    marginTop: -45,
    textShadowColor: "#545454",
    textShadowOffset: { width: 3, height: 4 },
    textShadowRadius: 25,
  },
  information: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: "bold",
  },
  inputs: {
    marginTop: 50,
    marginBottom: 80,
  },
  emailInput: {
    backgroundColor: "#fff",
    color: "#223333",
    fontFamily: "Inter-Medium",
    fontSize: 18,
    borderRadius: 8,
    paddingLeft: 30,
    marginBottom: 30,
  },
  passwordInput: {
    backgroundColor: "#fff",
    color: "#223333",
    fontFamily: "Inter-Medium",
    fontSize: 18,
    borderRadius: 8,
    paddingLeft: 30,
  },
  loginButton: {
    backgroundColor: "#223333",
    padding: 10,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  forgetPassword: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#fff",
    marginTop: 8,
  },
  footerInformation: {
    textAlign: "center",
    fontFamily: "Inter-Regular",
    fontSize: 12,
    marginTop: 60,
    color: "#fff",
    paddingHorizontal: 20,
  },
});
