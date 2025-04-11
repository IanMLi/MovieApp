import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ReviewScreen from "../screens/ReviewScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalle" component={DetailScreen} />
            <Stack.Screen name="Review" component={ReviewScreen} />
        </Stack.Navigator>
    )
}