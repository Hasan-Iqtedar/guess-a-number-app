import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';

import Card from './Card';
import Input from './Input';
import NumberContainer from './NumberContainer';
import CustomButton from './CustomButton';
import Colors from '../constants/Colors';

const StartGameScreen = props => {

    //The number entered in the input field.
    const [enteredValue, setEnteredValue] = useState('');
    //To confirm entered value through confirm button.
    const [confirmed, setConfirmed] = useState(false);
    
    const [selectedNumber, setSelectedNumber] = useState();

    /**To clean and set the input value. */
    const setInput = (inputText) => {
        //Removing any non-digit characters.
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    /**To reset the input and clear confirmation.*/
    const resetInput = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    /**To validate that the number entered is between 1 and 99 and 
     * to alert the user otherwise.
    */
    const confirmInput = () => {
        num = parseInt(enteredValue);
        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(title = 'Invalid Number',
                message = "Number must be between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: resetInput }])
            return;
        }
        setSelectedNumber(num);
        setEnteredValue('');
        setConfirmed(true);
        Keyboard.dismiss();
    }

    //To display the start button after confirmation.
    let startGame;

    if (confirmed) {
        startGame =
            <Card style={styles.selectionScreen}>
                <Text style={styles.textContainer}>You Selected</Text>
                <NumberContainer chosenNumber={selectedNumber} />
                <CustomButton onClick={() => props.onStartGame(selectedNumber)}>START</CustomButton>
            </Card>
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.startGameScreen}>
                        <Text style={styles.title}>Start a new Game!</Text>
                        <Card style={styles.inputContainer}>
                            <Text>Select a Number</Text>
                            <Input
                                style={styles.input}
                                keyboardType="number-pad"
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                maxLength={2}
                                value={enteredValue}
                                onChangeText={setInput}
                            />
                            <View style={styles.buttonContainer}>
                                <Button title='reset' color={Colors.secondary} onPress={resetInput} />
                                <Button title='confirm' color={Colors.primary} onPress={confirmInput} />
                            </View>
                        </Card>
                        {startGame}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

styles = StyleSheet.create({
    startGameScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginVertical: 20
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: Colors.textColor
    },
    input: {
        width: 50,
        marginVertical: 20,
    },
    textContainer: {
        color: Colors.textColor,
        fontSize: 15,
    },
    selectionScreen: {
        alignItems: 'center',
        marginTop: 20,
        width: '50%',
    }
});

export default StartGameScreen;