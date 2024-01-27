import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NativeRouter, Routes, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import Page_SignUp from './Page_SignUp.js';
import Page_LogIn from './Page_LogIn.js';

export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#'
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    textTransform: 'none',
    paddingHorizontal: 32, 
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
