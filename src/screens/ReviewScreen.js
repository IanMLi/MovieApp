import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const ReviewScreen = ({ route, navigation }) => {
    const { movie } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.movieTitle}>Reseñas de {movie.title}</Text>
            {movie.reviews.map((review, index) => (
                <View key={index} style={styles.reviewContainer}>
                    <Text style={styles.reviewUser}>Usuario: {review.username}</Text>
                    <Text style={styles.reviewText}>Reseña: {review.review}</Text>
                </View>
            ))}
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
        backgroundColor: '#ffd4d1',
    },
    movieTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    reviewContainer: {
        marginVertical: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    reviewUser: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    reviewText: {
        fontStyle: 'italic',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
});

export default ReviewScreen;
