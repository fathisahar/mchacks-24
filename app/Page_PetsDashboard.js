import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';

const Page_PetsDashboard = () => {
    const navigation = useNavigation();
    const [pets, setPets] = useState(false);
    
    const [showPets, setShowPets] = useState(true);
    const [showAdopters, setShowAdopters] = useState(false);

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

    const handlePressToggle = () => {
        if (showPets){
            setShowAdopters(true);
            setShowPets(false);
        } else {
            setShowAdopters(false);
            setShowPets(true);
        }
      };
    

    const [isModalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState([]);

    const toggleFilter = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={[styles.pets_dashboard, { backgroundColor: '#FAEFF1' }]}>
            <View style={styles.dashboard_header}>
                {showPets && (
                    <Text style={styles.headerText}>Spawk Pets{'\n'}Dashboard</Text>
                )}
                {showAdopters && (
                    <Text style={styles.headerText}>Spawk Adopters{'\n'}Dashboard</Text>
                )}
                {showPets &&(
                    <Pressable onPress={() => handlePressing('PetAdding')} style={styles.add_pets_button}>
                        <Text style={styles.add_pets_plus}> + </Text>
                    </Pressable>
                )}
                {showAdopters &&(
                    <Pressable onPress={() => handlePressing('PetAdding')} style={styles.add_pets_button}>
                        <Image
                            style={styles.nav_img}
                            source={require('./resources/icons/messages.png')}
                        />
                    </Pressable>
                    
                )}
                
            </View>
            <View style={styles.toggle_dashboard}>
            <Pressable
                    style={({ pressed }) => [
                        styles.toggle_button_dashboard,
                        showPets && styles.toggle_button_pressed_dashboard, 
                    ]}
                    onPress={handlePressToggle}
                    >
                    {showAdopters && (
                    <Text >View pets on adoption</Text>
                    )}
                    {showPets && (
                    <Text >View interested adopters</Text>
                    )}
                    </Pressable>
                    </View>
            {showPets && (
                <View style={styles.pet_card_container}>
                {Object.entries(pets).map(([key, value]) => (
                    <View style={styles.pet_card}>
                    <Text>{value.name}</Text>
                    <Text>{value.description}</Text>
                    <Text>{value.age}</Text>
                    <Text>{value.gender}</Text>
                    </View>
                ))}
                </View>
            )}
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

export default Page_PetsDashboard;
