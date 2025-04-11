import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView, ImageBackground} from 'react-native';

const DetailScreen = ({ route, navigation }) => {
    const { movie } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <ImageBackground
                source={{ uri: movie.image }}
                style={styles.backgroundImage}
                blurRadius={10}
            >
                <View style={styles.overlay}>
                    <View style={styles.box}>
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                    </View>

                    <Image source={{ uri: movie.image }} style={styles.movieImageDetail} />

                    <View style={styles.box}>
                        <Text style={styles.infoText}>Categoría: {movie.category}</Text>
                        <Text style={styles.infoText}>Año: {movie.year}</Text>
                        <Text style={styles.infoText}>Calificación: {movie.rating}</Text>
                        <Text style={styles.infoText}>Sinopsis: {movie.synopsis}</Text>
                        <Text style={styles.infoText}>Clasificación: {movie.classification}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Ver Reseñas"
                            onPress={() => navigation.navigate('Review', { movie })}
                        />
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
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        padding: 16,
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 16,
    },
    box: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: '100%',
    },
    movieTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
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
        color: 'white',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
});

export default DetailScreen;
