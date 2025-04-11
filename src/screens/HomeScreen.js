import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { movies } from '../data/movies';

const HomeScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.movieContainer}
            onPress={() => navigation.navigate('Detalle', { movie: item })}
        >
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { paddingTop: insets.top + 60 }]}>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffd4d1',
        paddingHorizontal: 16,
    },
    listContainer: {
        paddingBottom: 16,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    movieContainer: {
        width: '48%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0a9a4',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff1ef',
    },
    movieImage: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
        color: '#4b2c2c',
    },
});

export default HomeScreen;
