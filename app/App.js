import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import StackNavigator from './StackNavigator.js';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

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
      const email = "juliabgrenier.14.5@gmail.com";
      const password = "julia1234";

      await signInWithEmailAndPassword(auth, email, password);
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
        <Text>Login Screen</Text>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>

    </LinearGradient>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Welcome, {user.email}!</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
