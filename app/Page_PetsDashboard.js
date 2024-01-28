import { Text, Pressable, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';
import { useEffect, useState } from 'react';

const PetsDashboard = () => {
    const navigation = useNavigation();
    const [pets, setPets] = useState(false);
    
    const handlePressing = (destination) => {
        navigation.navigate(destination);
    };

    useEffect(() => {
        fetchPets();
      }, []);  

    const fetchPets = async () => {
        try {
          const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/pets.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setPets(data);
          console.log('Fetched data:', data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const CustomButton = ({ title, destination }) => {
        const handlePress = () => {
            navigation.navigate(destination);
        };
    
        return (
            <Pressable onPress={handlePress} style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        );
    };

    const [isModalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState([]);

    const toggleFilter = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={[styles.pets_dashboard, { backgroundColor: '#FAEFF1' }]}>
            <View style={styles.dashboard_header}>
                <Text style={styles.headerText}>Spawk Pets{'\n'}Dashboard</Text>
                <Pressable onPress={() => handlePressing('PetAdding')} style={styles.add_pets_button}>
                    <Text style={styles.add_pets_plus}> + </Text>
                </Pressable>
            </View>
            {Object.entries(pets).map(([key, value]) => (
                <View>

                <Text>{value.name}</Text>
                <TextInput
                style={[styles.pet_display, { backgroundColor: '#D9D9D9', color: "#FAEFF1" }]}
                placeholder="Password"
                placeholderTextColor="#FAEFF1"
                key={key}
                value={value.name}
                />
                </View>
            ))}

            <TextInput
                style={[styles.pet_display, { backgroundColor: '#D9D9D9', color: "#FAEFF1" }]}
                placeholder="Password"
                placeholderTextColor="#FAEFF1"
            />
            <CustomButton title="go home" destination="Home" />
            <View style={styles.nav_container}>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/profile.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/search.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/spark.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/settings1.png')}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default PetsDashboard;
