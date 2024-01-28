import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles/styles';

    const CustomButton = ({ title, destination }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(destination);
    };

    };

    const ProfilePet = () => {
        return (
          <View style={styles.container_profile}>
        
            <CustomButton title="go home" destination="Home" />

            <View style={styles.backgroundBox_profile}></View>

            <View style={styles.foregroundBox_profile}></View>

            <View style={styles.container2_profile}>

              <View style={styles.circle_profile}></View>

              <Text style={styles.text_header1}>Kiko Rapin</Text>
              <Text style={styles.text_header2}>Montréal, CA</Text>
              
            </View>

            <View style={styles.container3_profile}>

              <Text style={styles.text_header3}>Description</Text>
              <Text style={styles.text_header4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              
            </View>

            <View style={styles.container4_profile}>
              <View style={styles.column}>
                <Text style={styles.text_header3}>Breed</Text>
                <Text style={styles.text_header4}>meow</Text>

                <Text style={styles.text_header3}>Gender</Text>
                <Text style={styles.text_header4}>M</Text>

              </View>
              <View style={styles.column}>
                <Text style={styles.text_header3}>Age</Text>
                <Text style={styles.text_header4}>2 yo</Text>

                <Text style={styles.text_header3}>Size</Text>
                <Text style={styles.text_header4}>Large</Text>

              </View>

            </View>

            <View style={styles.container5_profile}>

                <Text style={styles.text_header3}>Quirks</Text>

                <View style={styles.container6_profile}>

                  <Text style={styles.text_header5}>Loves cuddling</Text>
                 
                </View>

                <View style={styles.container6_profile}>

                  <Text style={styles.text_header5}>Hairy</Text>

                </View>

            </View>

          </View>

         
        );
      }

export default ProfilePet;