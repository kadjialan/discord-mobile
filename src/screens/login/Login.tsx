import React from "react";
import { styles } from "./Login.styles";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>We are so excited to see you again</Text>
        <Text style={styles.text}>ACCOUNT INFORMATION</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="Password"
        />

        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>sign up with google</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
