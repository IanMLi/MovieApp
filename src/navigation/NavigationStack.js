import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ReviewScreen from "../screens/ReviewScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator screenOptions={styles.header}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Películas de Anime' }} />
            <Stack.Screen name="Detalle" component={DetailScreen} options={{ title: 'Detalle' }} />
            <Stack.Screen name="Review" component={ReviewScreen} options={{ title: 'Reseña' }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTintColor: '#4b2c2c',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
        },
    },
});
