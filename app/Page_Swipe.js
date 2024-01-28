import React from 'react';
import { Text, Pressable, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const Swipe = () => {

    return (
        <View style={styles.container_swipe}>
            <Text style={styles.text_white_header}>Find a spark</Text>
            <Image
                style={styles.swipe_photo}
                source={{
                  uri: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg',
                }}
              />
             <View style={styles.action_icons}>
                <Pressable style={[styles.icon, { backgroundColor: '#FFB370'}]}>
                    <Image
                        style={styles.icon_img}
                        source={require('./resources/icons/spark.png')}
                      />
                </Pressable>
                <Pressable style={[styles.icon, { backgroundColor: '#DA4167'}]}>
                    <Image
                        style={styles.icon_img}
                        source={require('./resources/icons/no.png')}
                      />
                </Pressable>
             </View>
        </View>
    )
}

export default Swipe;