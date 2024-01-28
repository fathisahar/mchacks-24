import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Linear from 'react-native-linear-gradient';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

import styles from './styles/styles';

const PetsDashboard = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = React.useState([]);
    const data = [
          {key:'1', value:'Mobiles', disabled:true},
          {key:'2', value:'Appliances'},
          {key:'3', value:'Cameras'},
          {key:'4', value:'Computers', disabled:true},
          {key:'5', value:'Vegetables'},
          {key:'6', value:'Diary Products'},
          {key:'7', value:'Drinks'},
  ]

    const toggleFilter = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={[styles.pets_dashboard, { backgroundColor: '#FAEFF1' }]}>
            <Text style={styles.headerText}>Spawk Pets{'\n'}Dashboard</Text>
            <Pressable style={styles.filters_button} onPress={toggleFilter}>
                <Text style={styles.filters_text}>Filters</Text>

            </Pressable>
            <MultipleSelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    onSelect={() => alert(selected)}
                    label="Categories"
                />
            <TextInput
                style={[styles.pet_display, { backgroundColor: '#D9D9D9', color: "#FAEFF1" }]}
                placeholder="Password"
                placeholderTextColor="#FAEFF1"
            />
            <View style={styles.nav_container}>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/profile.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/search.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/spark.png')}
                    />
                </Pressable>
                <Pressable style={[styles.nav_button, { backgroundColor: '#DA4167'}]}>
                    <Image
                    style={styles.nav_img}
                    source={require('./resources/icons/settings1.png')}
                    />
                </Pressable>
            </View>
        </View>
    )

}

export default PetsDashboard;