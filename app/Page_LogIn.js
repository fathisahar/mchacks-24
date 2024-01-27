import React from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const Page_LogIn = () => {

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

  return (
    <SafeAreaView>
        <Text>This is the login page.</Text>
        <CustomButton title="Cancel" destination="Home"/>
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


export default Page_LogIn;
