import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Card from './Card';
import NumberContainer from './NumberContainer';
import CustomButton from './CustomButton';
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

const renderListItem = (length, data) => (
    <View style={styles.listItem}>
        <Text style={styles.guessColor}>Round: {length - data.index}</Text>
        <Text style={styles.guessColor}>Guess: {data.item}</Text>
    </View>
)

const GameScreen = props => {

    const initialGuess = generateGuess(100, 1, props.chosenNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guesses, setGuesses] = useState([initialGuess.toString()]);

    const min = useRef(1);
    const max = useRef(100);

    const { chosenNumber, onGameOver } = props;

    useEffect(() => {
        if (currentGuess == chosenNumber) {
            onGameOver(guesses.length);
        }
    }, [currentGuess, chosenNumber, onGameOver]);

    function guessLower() {

        if (props.chosenNumber > currentGuess) {
            Alert.alert("Don't Cheat", "Please provide the correct hint", [{ text: 'Okay', style: 'destructive' }]);
            return;
        }

        max.current = currentGuess;
        const newGuess = generateGuess(max.current, min.current, currentGuess);
        setCurrentGuess(newGuess);
        //setRounds(rounds => rounds + 1)
        setGuesses((currentGuesses) => [newGuess.toString(), ...currentGuesses]);
    }

    const guessHigher = () => {

        if (props.chosenNumber < currentGuess) {
            Alert.alert("Don't Cheat", "Please provide the correct hint", [{ text: 'Okay', style: 'destructive' }]);
            return;
        }

        min.current = currentGuess + 1;
        const newGuess = generateGuess(max.current, min.current, currentGuess);
        setCurrentGuess(newGuess);
        setGuesses((currentGuesses) => [newGuess.toString(), ...currentGuesses]);
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.textContainer}>My Guess</Text>
            <NumberContainer chosenNumber={currentGuess} />
            <Card style={styles.buttonContainer}>
                <CustomButton onClick={guessLower} style={styles.button}>
                    <Ionicons name="md-remove" size={25}></Ionicons>
                </CustomButton>
                <CustomButton onClick={guessHigher} style={styles.button}>
                    <Ionicons name="md-add" size={25} ></Ionicons>
                </CustomButton>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={item => item}
                    data={guesses}
                    renderItem={renderListItem.bind(this, guesses.length)}
                    contentContainerStyle={styles.list}
                />
            </View>

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
        justifyContent: 'space-evenly',
        width: '80%'
    },
    textContainer: {
        color: Colors.textColor,
        fontSize: 25,
    },
    button: {
        width: 75,
    },
    listContainer: {
        flex: 1,
        width: '60%',
        marginVertical: 20,
    },
    list: {
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: Colors.primary,
        height: 30
    },
    guessColor: {
        color: 'white',
    }
});

export default GameScreen;
