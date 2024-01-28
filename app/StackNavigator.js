import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page_SignUp from './Page_SignUp.js';
import Page_LogIn from "./Page_LogIn.js";
import Page_Home from "./Page_Home.js";
import Page_PetAdding from "./Page_PetAdding.js";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
            <Stack.Screen name="Home" component={Page_Home}/>
            <Stack.Screen name="SignUp" component={Page_SignUp} />
            <Stack.Screen name="LogIn" component={Page_LogIn} />
            <Stack.Screen name="PetAdding" component={Page_PetAdding} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;
