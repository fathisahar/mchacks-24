import React from 'react';
import { Text, Pressable, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles/styles';

    const CustomButton = ({ title, destination }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(destination);
    };

    };

    const ProfilePet = ({ route }) => {
      const { pet } = route.params;

      const { name, location, description, animalType, age, gender, size, quirks } = pet;
    
        const navigation = useNavigation();

        const handlePress = (destination) => {
            navigation.navigate(destination);
        };
        return (
          <View style={styles.container_profile}>
            <View style={styles.backgroundBox_profile}></View>
            <View style={styles.foregroundBox_profile}></View>
            <View style={styles.container2_profile}>
              <View style={styles.circle_profile}></View>
              <Text style={styles.text_header1}>{name}</Text>
              <Text style={styles.text_header2}>{location}</Text>
            </View>
            <View style={styles.container3_profile}>
              <Text style={styles.text_header3}>Description</Text>
              <Text style={styles.text_header4}>{description}</Text>
            </View>
            <View style={styles.container4_profile}>
              <View style={styles.column}>
                <Text style={styles.text_header3}>Breed</Text>
                <Text style={styles.text_header4}>{animalType}</Text>
                <Text style={styles.text_header3}>Gender</Text>
                <Text style={styles.text_header4}>{gender}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.text_header3}>Age</Text>
                <Text style={styles.text_header4}>{age}</Text>
                <Text style={styles.text_header3}>Size</Text>
                <Text style={styles.text_header4}>{size}</Text>
              </View>
            </View>
            <View style={styles.container5_profile}>
                <Text style={styles.text_header3}>Quirks</Text>
                  <View style={styles.container6_profile}>
                      <Text style={styles.text_header5}>{quirks}</Text>
                  </View>
            </View>
          <View style={[styles.nav_container, { backgroundColor: "#FAEFF1" }]}>
            <Pressable style={[styles.nav_button, { backgroundColor: "#FAEFF1" }]}>
              <Image
                style={styles.nav_img}
                source={require("./resources/icons/profile.png")}
              />
            </Pressable>
            <Pressable style={[styles.nav_button, { backgroundColor: "#FAEFF1" }]} onPress={() => handlePress("Swipe")}>
              <Image
                style={styles.nav_img}
                source={require("./resources/icons/search.png")}
              />
            </Pressable>
            <Pressable style={[styles.nav_button, { backgroundColor: "#FAEFF1" }]} onPress={() => handlePress("PetsMatching")}>
              <Image
                style={styles.nav_img}
                source={require("./resources/icons/spark.png")}
              />
            </Pressable>
            <Pressable style={[styles.nav_button, { backgroundColor: "#FAEFF1" }]}>
              <Image
                style={styles.nav_img}
                source={require("./resources/icons/settings1.png")}
              />
            </Pressable>
          </View>

          </View>

         
        );
      }

export default ProfilePet;