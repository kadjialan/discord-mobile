import React, { useState } from "react";
import { styles } from "./Login.styles";
import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable
} from "react-native";
import { FIREBASE_AUTH } from "../../../firebase /firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(): any {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    try {
      const responce = signInWithEmailAndPassword(auth, email, password);
      console.log(responce)
    } catch (error: any) {
      console.log(error)
      alert('sign in failed :'+ error.message)
    }
  };


  const signUp = async () => {
    try {
      const responce = createUserWithEmailAndPassword(auth, email, password);
      console.log(responce)
      alert('check your emails')
    } catch (error: any) {
      console.log(error)
      alert('sign in failed :'+ error.message)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>We are so excited to see you again</Text>
        <Text style={styles.text}>ACCOUNT INFORMATION</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="Email addresse"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText} onPress={() => signIn()}>Login</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText} onPress={() => signUp()}>sign up with google</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
