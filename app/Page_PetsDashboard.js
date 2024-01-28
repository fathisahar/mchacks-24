import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Linear from 'react-native-linear-gradient';

import styles from './styles/styles';

const CustomButton = ({ title, destination }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(destination);
    };

    return (
        <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const PetsDashboard = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleFilter = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={[styles.pets_dashboard, { backgroundColor: '#FAEFF1' }]}>
            <Text style={styles.headerText}>Spawk Pets{'\n'}Dashboard</Text>
            <Pressable style={styles.filters_button} onPress={toggleFilter}>
                <Text style={styles.filters_text}>Filters</Text>
            </Pressable>
            <TextInput
                style={[styles.pet_display, { backgroundColor: '#D9D9D9', color: "#FAEFF1" }]}
                placeholder="Password"
                placeholderTextColor="#FAEFF1"
            />
            <CustomButton title="go home" destination="Home" />
        </View>
    )

}

export default PetsDashboard;