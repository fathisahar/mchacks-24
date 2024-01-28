import React, { useState } from 'react';
import { Text, Pressable, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/styles';

const CustomButton = ({ title, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const Page_PetAdding = () => {
const navigation = useNavigation();
const [petName, setPetName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [quirks, setQuirks] = useState('');
  const [pets, setPets] = useState(false);


  const sendPetData = async () => {
    let newID = 0;
    if (pets !== null) {
      newID = Object.keys(pets).length + 1;
    }

    const petData = {
      id: newID,
      image: 'url_to_image',
      name: petName,
      description: description,
      location: location,
      animalType: animalType,
      gender: gender,
      size: size,
      age: age,
      quirks: quirks
    };
  
    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/pets.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to send pet data');
      }
  
      console.log('Pet data sent successfully');
  
      setPetName('');
      setDescription('');
      setLocation('');
      setAnimalType('');
      setGender('');
      setSize('');
      setAge('');
      setQuirks('');

      navigation.navigate("PetsDashboard");
    } catch (error) {
      console.error('Error sending pet data:', error);
    }
  };

  const handlePetNameChange = (text) => {
    setPetName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleAnimalTypeChange = (text) => {
    setAnimalType(text);
  };

  const handleGenderChange = (text) => {
    setGender(text);
  };

  const handleSizeChange = (text) => {
    setSize(text);
  };

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleQuirksChange = (text) => {
    setQuirks(text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={['#E29062', '#DA4167']} style={styles.linearGradient}>
        <View style={styles.container}>
        <Text style={styles.adding_pets_header}>Add a pet for adoption</Text>
            <View style="icon_view">
            <Image
            source={{ uri: 'https://i.redd.it/5ointhi9p8031.jpg' }}
            style={styles.icon_adding_pets}
            />
            </View>
          
			<TextInput
            style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1' }]}
            placeholder="Pet Name"
            placeholderTextColor="#FAEFF1"
            value={petName}
            onChangeText={handlePetNameChange}
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1' }]}
            placeholder="Description"
            placeholderTextColor="#FAEFF1"
            value={description}
            onChangeText={handleDescriptionChange}
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1' }]}
            placeholder="Location"
            placeholderTextColor="#FAEFF1"
            value={location}
            onChangeText={handleLocationChange}
          />
          <TextInput
            style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1' }]}
            placeholder="Animal Type"
            placeholderTextColor="#FAEFF1"
            value={animalType}
            onChangeText={handleAnimalTypeChange}
          />
          <View style={styles.adding_pets_size_container}>
            <TextInput
              style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1', width: '22%', marginLeft: 5 }]}
              placeholder="Gender"
              placeholderTextColor="#FAEFF1"
              value={gender}
              onChangeText={handleGenderChange}
            />
            <TextInput
              style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1', width: '22%', marginLeft: 5 }]}
              placeholder="Size"
              placeholderTextColor="#FAEFF1"
              value={size}
              onChangeText={handleSizeChange}
            />
            <TextInput
              style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1', width: '22%', marginLeft: 5 }]}
              placeholder="Age"
              placeholderTextColor="#FAEFF1"
              value={age}
              onChangeText={handleAgeChange}
            />
          </View>
          <TextInput
            style={[styles.input, { backgroundColor: '#FAEFF130', color: '#FAEFF1' }]}
            placeholder="Quirks"
            placeholderTextColor="#FAEFF1"
            value={quirks}
            onChangeText={handleQuirksChange}
          />
          <Pressable onPress={sendPetData} style={styles.button}>
          <Text>SUBMIT</Text>
        </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Page_PetAdding;
