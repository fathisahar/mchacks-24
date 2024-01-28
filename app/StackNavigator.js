import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page_PetsMatching from "./Page_PetsMatching.js";
import Page_SignUp from './Page_SignUp.js';
import Page_LogIn from "./Page_LogIn.js";
import Page_Swipe from "./Page_Swipe.js"
import Page_Home from "./Page_Home.js";
import Page_PetAdding from "./Page_PetAdding.js";
import Page_ProfilePet from "./Page_ProfilePet.js";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
            <Stack.Screen name="Home" component={Page_Home}/>
            <Stack.Screen name="SignUp" component={Page_SignUp} />
            <Stack.Screen name="LogIn" component={Page_LogIn} />
            <Stack.Screen name="PetsMatching" component={Page_PetsMatching} />
            <Stack.Screen name="Swipe" component={Page_Swipe} />
            <Stack.Screen name="PetAdding" component={Page_PetAdding} />
            <Stack.Screen name="ProfilePet" component={Page_ProfilePet} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;
