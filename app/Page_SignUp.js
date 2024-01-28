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

  useEffect(() => {
    setShowProvider(true);
    fetchProviders();
  }, []);  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [showProvider, setShowProvider] = useState(false);
  const [showAdopter, setShowAdopter] = useState(false);
  const [providers, setProviders] = useState(false);
  const [adopters, setAdopters] = useState(false);

  const sendData = () => {
    if (showAdopter){
      sendAdopterData();
    } 
    if (showProvider) {
      sendProviderData();
    }
  }

  const fetchProviders = async () => {
    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/providers.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProviders(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchAdopters = async () => {
    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/adopters.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAdopters(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sendAdopterData = async () => {
    if (adopters !== null) {
      newID = Object.keys(adopters).length + 1;
    } else {
      newID = 0;
    }    

    const adopterData = {
      id: newID,
      image: 'url_to_image',
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      location: 'New York'
    };

    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/adopters.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adopterData)
      });

      if (!response.ok) {
        throw new Error('Failed to send adopter data');
      }

      console.log('adopter data sent successfully');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setLocation('');
      navigation.navigate("PetAdding"); 
    } catch (error) {
      console.error('Error sending adopter data:', error);
    }
  };

  const sendProviderData = async () => {
    if (providers !== null) {
      newID = Object.keys(providers).length + 1;
    } else {
      newID = 0;
    }    

    const providerData = {
      id: newID,
      image: 'url_to_image',
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      location: 'New York'
    };

    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/providers.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(providerData)
      });

      if (!response.ok) {
        throw new Error('Failed to send provider data');
      }

      console.log('Provider data sent successfully');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setLocation('');
    } catch (error) {
      console.error('Error sending provider data:', error);
    }
  };
  
  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePressProvider = () => {
    if (showProvider){
      if (showAdopter){
        setShowProvider(false);
      }
    } else {
      setShowProvider(true);
      setShowAdopter(false);
    }
  };

  const handlePressAdopter = () => {
    if (showAdopter){
      if (showProvider){
        setShowAdopter(false);
      }
    } else {
      setShowAdopter(true);
      setShowProvider(false);
    }
  };

  return (
    <LinearGradient 
      colors={['#E29062', '#DA4167']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style="icon_view">
          <Image
          source={{ uri: 'https://i.redd.it/5ointhi9p8031.jpg' }}
          style={styles.icon}
        />
        </View>
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
            showAdopter && styles.toggle_button_pressed, 
          ]}
          onPress={handlePressAdopter}
        >
          <Text>Adopter</Text>
        </Pressable>
        </View>
        {showProvider && (
          <>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Last Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={lastName}
          onChangeText={handleLastNameChange}
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
         <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Location"
          placeholderTextColor="#FAEFF1"
          value={location}
          onChangeText={handleLocationChange}
        />
        </>
        )}
        {showAdopter && (
        <>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Adopter"
          placeholderTextColor="#FAEFF1"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Last Name of Adopter"
          placeholderTextColor="#FAEFF1"
          value={lastName}
          onChangeText={handleLastNameChange}
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
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Location"
          placeholderTextColor="#FAEFF1"
          value={location}
          onChangeText={handleLocationChange}
        />

        </>
        )}
        <Pressable onPress={sendData} style={styles.button}>
          <Text>SIGN UP</Text>
        </Pressable>
        <Pressable onPress={() => handlePress("LogIn")}>
          <Text style={styles.text}>Have a provider account? Log in now</Text>
        </Pressable>
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
