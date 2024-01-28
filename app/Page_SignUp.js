import React from 'react';
import { useEffect, useState } from 'react';
import { Text, Pressable, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'; 
import styles from './styles/styles';

const Page_SignUp = () => {
  const navigation = useNavigation();

  const handlePress = (destination) => { 
    navigation.navigate(destination);
  };

  const [firstNameProvider, setFirstNameProvider] = useState('');
  const [lastNameProvider, setLastNameProvider] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameProviderChange = (text) => {
    setFirstNameProvider(text);
  };

  const handleLastNameProviderChange = (text) => {
    setLastNameProvider(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <LinearGradient 
      colors={['#E29062', '#DA4167']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={firstNameProvider}
          onChangeText={handleFirstNameProviderChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={lastNameProvider}
          onChangeText={handleLastNameProviderChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Email"
          placeholderTextColor="#FAEFF1"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Password"
          placeholderTextColor="#FAEFF1"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Pressable onPress={() => handlePress("SignUp")} style={styles.button}>
          <Text>SIGN UP</Text>
        </Pressable>
        <Pressable onPress={() => handlePress("LogIn")}>
          <Text style={[styles.text, { marginTop: 50 }]}>Have a provider account? Log in now</Text>
        </Pressable>
        <CustomButton title="CANCEL" destination="Home"/>
      </View>
    </LinearGradient>
  );
};

const CustomButton = ({ title, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Page_SignUp;
