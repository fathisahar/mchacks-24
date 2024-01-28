import React from 'react';
import { Text, Pressable, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';

    const CustomButton = ({ title, destination }) => { 
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(destination); 
    };

    return (
        <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.button_text}>{title}</Text>
        </Pressable>
    );
    };

const Page_Home = () => {
  return (

      <LinearGradient
        colors={['#E29062', '#DA4167']}
        style={styles.linearGradient}>
        <View style={styles.container}>
        <Text style={{color: '#FAEFF1',
                         fontSize: 40,
                         marginBottom: 20}}>Welcome!</Text>
        <CustomButton title="Log in!" destination="LogIn" />
        <CustomButton title="Sign Up!" destination="SignUp" />
        <Image
            style={{ width: 150, height: 150, marginBottom:-150, marginTop:80}}
            source={require('./resources/heart_white.png')}
          />
        </View>
      </LinearGradient>
  );
};

export default Page_Home;
