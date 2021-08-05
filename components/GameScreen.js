import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Dimensions } from 'react-native';

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

/**To render past gusses in a list format.*/
const renderListItem = (length, data) => (
    <View style={styles.listItem}>
        <Text style={styles.guessColor}>Round: {length - data.index}</Text>
        <Text style={styles.guessColor}>Guess: {data.item}</Text>
    </View>
)

const GameScreen = props => {

    const initialGuess = generateGuess(100, 1, props.chosenNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    //Array List of past gussess.
    const [guesses, setGuesses] = useState([initialGuess.toString()]);

    const [detectedDeviceWidth, setDetectedDeviceWidth] = useState(Dimensions.get('window').width)

    const min = useRef(1);//Current min value.
    const max = useRef(100);//Current max value.

    const { chosenNumber, onGameOver } = props;

    useEffect(() => {
        if (currentGuess == chosenNumber) {
            onGameOver(guesses.length);
        }
    }, [currentGuess, chosenNumber, onGameOver]);

    useEffect(() => {
        const updateLayout = () => {
            setDetectedDeviceWidth(Dimensions.get('window').width);
        }

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

    /**To make a guess lower than the current guess.*/
    function guessLower() {
        if (props.chosenNumber > currentGuess) {
            Alert.alert("Don't Cheat", "Please provide the correct hint", [{ text: 'Okay', style: 'destructive' }]);
            return;
        }

        max.current = currentGuess;
        const newGuess = generateGuess(max.current, min.current, currentGuess);
        setCurrentGuess(newGuess);
        setGuesses((currentGuesses) => [newGuess.toString(), ...currentGuesses]);
    }

    /**To make a guess higher than the current guess.*/
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

    //For landscape orientation.
    if (detectedDeviceWidth > 400) {
        return (
            <View style={styles.landscapeScreen}>
                <Text style={styles.textContainer}>My Guess</Text>
                <View style={styles.landscapeButtonContainer}>
                    <CustomButton onClick={guessLower} style={styles.button}>
                        <Ionicons name="md-remove" size={25}></Ionicons>
                    </CustomButton>
                    <NumberContainer chosenNumber={currentGuess} />
                    <CustomButton onClick={guessHigher} style={styles.button}>
                        <Ionicons name="md-add" size={25} ></Ionicons>
                    </CustomButton>
                </View>
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

    //For portrait orientation.
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
    landscapeScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%'
    },
    landscapeButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%'
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
        width: Dimensions.get('window').width > 350 ? '70%' : '80%',
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
