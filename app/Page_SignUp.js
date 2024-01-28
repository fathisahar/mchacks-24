import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Page_SignUp = () => {

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
    <View>
        <Text>This is the sign up page.</Text>
        <CustomButton title="Cancel" destination="Home"/>
    </View>
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

export default Page_SignUp;
