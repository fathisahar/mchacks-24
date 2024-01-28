import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page_SignUp from './Page_SignUp.js';
import Page_LogIn from "./Page_LogIn.js";
import Page_Home from "./Page_Home.js";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
            <Stack.Screen name="Home" component={Page_Home}/>
            <Stack.Screen name="SignUp" component={Page_SignUp} />
            <Stack.Screen name="LogIn" component={Page_LogIn} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;
