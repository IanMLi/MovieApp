import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
    const { movie } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Image source={{ uri: movie.image }} style={styles.movieImageDetail} />
            <Text style={styles.infoText}>Categoría: {movie.category}</Text>
            <Text style={styles.infoText}>Año: {movie.year}</Text>
            <Text style={styles.infoText}>Calificación: {movie.rating}</Text>
            <Text style={styles.infoText}>Sinopsis: {movie.synopsis}</Text>
            <Text style={styles.infoText}>Clasificación: {movie.classification}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Ver Reseñas" onPress={() => navigation.navigate('Review', { movie })} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Volver al Inicio"
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' }],
                        });
                    }}
                />
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    movieTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    movieImageDetail: {
        width: 300,
        height: 440,
        resizeMode: 'cover',
        borderRadius: 8,
        marginVertical: 16,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 4,
        alignSelf: 'stretch',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
});

export default DetailScreen;
