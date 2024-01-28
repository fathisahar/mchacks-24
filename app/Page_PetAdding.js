import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 

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
    <SafeAreaView>
      <Text>This is the home page.</Text>
      <CustomButton title="Log in!" destination="LogIn" />
      <CustomButton title="Sign Up!" destination="SignUp" />
    </SafeAreaView>
  );
};

export default Page_PetAdding;
