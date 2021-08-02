import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import Card from './Card';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game Over</Text>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/success.png")} resizeMode="cover" style={styles.image} />
            </View>
            <Card >
                <Text style={styles.summary}>The Number was: {props.selectedNumber} </Text>
                <Text style={styles.summary}>Total guesses it took: {props.totalGuesses} </Text>
                <View style={styles.buttonContainer}>
                    <Button title="Play Again" onPress={props.onRestart} color={Colors.secondary} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.textColor,
    },
    summary: {
        fontSize: 20,
        color: Colors.textColor,
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default GameOverScreen;