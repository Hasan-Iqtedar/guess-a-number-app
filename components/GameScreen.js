import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from './Card';
import NumberContainer from './NumberContainer';
import Colors from '../constants/Colors';

/**To make a guess of the number the user entered.*/
const generateGuess = (max, min, exclude) => {

    max = Math.ceil(max);
    min = Math.floor(min);

    guess = Math.floor((Math.random() * (max - min)) + min);

    if (guess == exclude) {
        return generateGuess(max, min, exclude);
    }
    else {
        return guess;
    }

}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateGuess(1, 100, props.chosenNumber));

    return (
        <View style={styles.screen}>
            <Text style={styles.textContainer}>My Guess</Text>
            <NumberContainer chosenNumber={currentGuess} />
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" />
                <Button title="HIGHER" />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    textContainer: {
        color: Colors.textColor,
        fontSize: 25,
    },
});

export default GameScreen;
