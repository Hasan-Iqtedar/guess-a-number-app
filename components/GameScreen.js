import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import Card from './Card';
import NumberContainer from './NumberContainer';
import Colors from '../constants/Colors';

/**To make a guess of the number the user entered.*/
const generateGuess = (max, min, exclude) => {
    max = Math.ceil(max);
    min = Math.floor(min);

    guess = Math.floor((Math.random() * (max - min))) + min;

    if (guess == exclude) {
        return generateGuess(max, min, exclude);
    }
    else {
        return guess;
    }

}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateGuess(100, 1, props.chosenNumber));
    const [rounds, setRounds] = useState(0);

    const min = useRef(1);
    const max = useRef(100);

    const { chosenNumber, onGameOver } = props;

    useEffect(() => {
        if (currentGuess == chosenNumber) {
             
            onGameOver(rounds);
        }
    }, [currentGuess, chosenNumber, onGameOver, rounds]);

    function guessLower() {

        if (props.chosenNumber > currentGuess) {
            Alert.alert("Don't Cheat", "Please provide the correct hint", [{ text: 'Okay', style: 'destructive' }]);
            return;
        }

        max.current = currentGuess;
        newGuess = generateGuess(max.current, min.current, currentGuess);
        setCurrentGuess(newGuess);
        setRounds(rounds => rounds + 1)
    }

    const guessHigher = () => {

        if (props.chosenNumber < currentGuess) {
            Alert.alert("Don't Cheat", "Please provide the correct hint", [{ text: 'Okay', style: 'destructive' }]);
            return;
        }

        min.current = currentGuess
        const newGuess = generateGuess(max.current, min.current, currentGuess);
        setCurrentGuess(newGuess);
        setRounds(rounds => rounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.textContainer}>My Guess</Text>
            <NumberContainer chosenNumber={currentGuess} />
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={guessLower} />
                <Button title="HIGHER" onPress={guessHigher} />
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
