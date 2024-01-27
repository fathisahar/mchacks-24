import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import styles from './styles/styles';

const firebaseConfig = {
  apiKey: "AIzaSyCn-fidJWhdmI9ClD3W2RxaS1BCqS3Irqc",
  authDomain: "mchacks24-salianmes.firebaseapp.com",
  projectId: "mchacks24-salianmes",
  storageBucket: "mchacks24-salianmes.appspot.com",
  messagingSenderId: "278107575648",
  appId: "1:278107575648:web:7971f2649fb066ca6b7a05",
  measurementId: "G-CW8WYVDBT1"
};

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (text) => {
    setEmailValue(text);
  };

  const handlePasswordChange = (text) => {
    setPasswordValue(text);
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe; // Cleanup on component unmount
  }, [auth, initializing]); // Include auth and initializing in the dependency array

  const handleLogin = async () => {
    try {
      // Replace with your authentication logic (e.g., email/password login)
      //const emailValue = "juliabgrenier.14.5@gmail.com";
      //const passwordValue = "julia1234";

      console.log('Input Value:', emailValue);
      console.log('Input Value:', passwordValue);

      await signInWithEmailAndPassword(auth, emailValue, passwordValue);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  if (initializing) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return (
    <LinearGradient
      colors={['#E29062', '#DA4167']}
      style={styles.linearGradient}>

      <View style={styles.container}>
        <TextInput
            style={[styles.button, {backgroundColor: '#FAEFF130', color:"#FAEFF1"}]}
            placeholder="Email address"
            placeholderTextColor="#FAEFF1"
            value={emailValue}
            onChangeText={handleEmailChange}
        />
        <TextInput
            style={[styles.button, {backgroundColor: '#FAEFF130', color:"#FAEFF1"}]}
            placeholder="Password"
            placeholderTextColor="#FAEFF1"
            value={passwordValue}
            onChangeText={handlePasswordChange}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.button_text}>LOGIN</Text>
        </Pressable>
        <Text style={styles.text}>Don't have an account? Sign Up Now</Text>

        <Text style={[styles.text, { marginTop: 50 }]}>Forgot Password?</Text>
      </View>

    </LinearGradient>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome, {user.email}!</Text>
      <StatusBar style="auto" />
    </View>
    // TODO switch page to application
  );
}
