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
        <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
    };

const Page_Home2 = () => {
  return (
    <SafeAreaView>
      <Text>This is the home page.</Text>
      <CustomButton title="Log in!" destination="LogIn" />
      <CustomButton title="Sign Up!" destination="SignUp" />
      <CustomButton title="Pets Dashboard" destination="PetsDashboard" />
      <CustomButton title="Swipe" destination="Swipe" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: 'black',
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

export default Page_Home2;
