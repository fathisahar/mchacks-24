import React from 'react';
import { useEffect, useState } from 'react';
import { Text, Pressable, TextInput, View, Image } from 'react-native';
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
  const [showProvider, setShowProvider] = useState(true);
  const [showAdoptee, setShowAdoptee] = useState(false);

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

  const handlePressProvider = () => {
    if (showProvider){
      if (showAdoptee){
        setShowProvider(false);
      }
    } else {
      setShowProvider(true);
      setShowAdoptee(false);
    }
  };

  const handlePressAdoptee = () => {
    if (showAdoptee){
      if (showProvider){
        setShowAdoptee(false);
      }
    } else {
      setShowAdoptee(true);
      setShowProvider(false);
    }
  };

  return (
    <LinearGradient 
      colors={['#E29062', '#DA4167']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.toggle}>
        <Pressable
          style={({ pressed }) => [
            styles.toggle_button,
            showProvider && styles.toggle_button_pressed, 
          ]}
          onPress={handlePressProvider}
        >
          <Text>Provider</Text>
        </Pressable>
          <Pressable
          style={({ pressed }) => [
            styles.toggle_button,
            showAdoptee && styles.toggle_button_pressed, 
          ]}
          onPress={handlePressAdoptee}
        >
          <Text>Adoptee</Text>
        </Pressable>
        </View>
        {showProvider && (
          <>
        <View style="icon_view">
          <Image
          source={{ uri: 'https://i.redd.it/5ointhi9p8031.jpg' }}
          style={styles.icon}
        />
        </View>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={firstNameProvider}
          onChangeText={handleFirstNameProviderChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Last Name of Provider"
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
        </>
        )}
        {showAdoptee && (
        <>
        <View style="icon_view">
          <Image
          source={{ uri: 'https://i.redd.it/5ointhi9p8031.jpg' }}
          style={styles.icon}
        />
        </View>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Adopter"
          placeholderTextColor="#FAEFF1"
          value={firstNameProvider}
          onChangeText={handleFirstNameProviderChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Last Name of Adopter"
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
        
        </>
        )}
        <Pressable onPress={() => handlePress("SignUp")} style={styles.button}>
          <Text>SIGN UP</Text>
        </Pressable>
        <Pressable onPress={() => handlePress("LogIn")}>
          <Text style={styles.text}>Have a provider account? Log in now</Text>
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
