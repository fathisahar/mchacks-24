import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Linear from 'react-native-linear-gradient';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

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

const Messages = () => {

    return (
        <View style={[styles.pets_dashboard, { backgroundColor: '#FFB370' }]}>
            <Text style={styles.headerText}>Messages</Text>
            <View style={styles.msg_container}>
                <View style={styles.msg_pfp}>
                </View>
                <View style={styles.msg_preview}>
                    <Pressable style={[styles.msg_button, { backgroundColor: '#FFB370'}]}>
                        <Text style={styles.msg_name}>Kiko Rapin</Text>
                        <Text style={[styles.filters_text, { color: '#070707'}]}>Hello Nancy, I am a...</Text>
                    </Pressable>
                    <Text style={styles.time_text}>10:49</Text>
                </View>
            </View>
            <View style={styles.msg_container}>
                <View style={styles.msg_pfp}>
                </View>
                <View style={styles.msg_preview}>
                    <Pressable style={[styles.msg_button, { backgroundColor: '#FFB370'}]}>
                        <Text style={styles.msg_name}>Kiko Rapin</Text>
                        <Text style={[styles.filters_text, { color: '#070707'}]}>Hello Nancy, I am a...</Text>
                    </Pressable>
                    <Text style={styles.time_text}>10:49</Text>
                </View>
            </View>
            <View style={styles.msg_container}>
                <View style={styles.msg_pfp}>
                </View>
                <View style={styles.msg_preview}>
                    <Pressable style={[styles.msg_button, { backgroundColor: '#FFB370'}]}>
                        <Text style={styles.msg_name}>Kiko Rapin</Text>
                        <Text style={[styles.filters_text, { color: '#070707'}]}>Hello Nancy, I am a...</Text>
                    </Pressable>
                    <Text style={styles.time_text}>10:49</Text>
                </View>
            </View>
            <View style={[styles.nav_container, {backgroundColor: '#FFB370'}]}>
                <Pressable style={[styles.nav_button, { backgroundColor: '#FFB370'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/profile.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#FFB370'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/search.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#FFB370'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/spark.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#FFB370'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/settings1.png')}
                    />
                </Pressable>
            </View>
        </View>
    )

}

export default Messages;