import { React } from "react";
import {View, Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name="LogIn" component={Page_LogIn}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator;