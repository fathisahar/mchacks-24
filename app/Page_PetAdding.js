import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 
import styles from './styles/styles';

    const CustomButton = ({ title, destination }) => { 
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(destination); 
    };

    return (
        <Pressable onPress={handlePress} >
        <Text>{title}</Text>
        </Pressable>
    );
    };

const Page_PetAdding = () => {
  return (
    <View>
        <View style={styles.adding_pets_header_container}>
        <Text style={styles.adding_pets_header}> Add a pet for adoption</Text>
        </View>
    </View>
  );
};

export default Page_PetAdding;
