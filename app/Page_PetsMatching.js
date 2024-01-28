import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Linear from 'react-native-linear-gradient';
import { SelectList } from 'react-native-dropdown-select-list'

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

const PetsMatching =  ({ route }) => {

	const { adopterID } = route.params;

    const [elements, setElements] = useState([]);
    const [selected, setSelected] = React.useState([]);
    const [data, setData] = useState([
        { key: '1', value: 'Dogs' },
        { key: '2', value: 'Cats' },
        { key: '3', value: 'Birds' },
        { key: '4', value: 'No Filters'},
    ]);

    const addFilter = (selected) => {
        // Find the "Dogs" object in the data array
        if (selected != 'No Filters')
        {
            const index = elements.findIndex((item) => item.value === selected);

            // If "Dogs" is found, update its properties
            if (index === -1) {
              const updatedData = [...data];
              updatedData[index] = { ...updatedData[index], disabled: true };
              setData(updatedData);
                const newElement = selected;
                setElements([...elements, newElement]);
            }
        }
        else {
            setElements([]);
            setData((data) => [
              { key: '1', value: 'Dogs', disabled: false },
              { key: '2', value: 'Cats', disabled: false },
              { key: '3', value: 'Birds', disabled: false },
              { key: '4', value: 'No Filters', disabled: false }
            ]);
            //console.log(data);
        }
    };

    return (
        <View style={[styles.pets_dashboard, { backgroundColor: '#FAEFF1' }]}>
            {console.log(adopterID)}
            <Text style={styles.headerText}>Spawk Pets{'\n'}Matching</Text>
            <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    onSelect={() => addFilter(selected)}
                    placeholder="Filters"
                    searchPlaceholder="Filters"
                    label="Filters"
                    boxStyles={styles.filters_button}
                    dropdownStyles={styles.filters_dropdown}
                    maxHeight="100"
                />
            <View style={styles.filters_container}>
                  {elements.map((element, index) => (
                    <Pressable style={styles.filters_selected}>
                        <Text style={{color: "#FAEFF1"}} key={index}>{element}</Text>
                    </Pressable>
                  ))}
                </View>
            <TextInput
                style={[styles.pet_display, { backgroundColor: '#D9D9D9', color: "#FAEFF1" }]}
                placeholder="Password"
                placeholderTextColor="#FAEFF1"
            />
            <CustomButton title="go home" destination="Home" />
        </View>
    )

}

export default PetsMatching;