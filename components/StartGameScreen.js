import React from 'react';
import { View, Button, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from './Card';
import Input from './Input';
import Colors from '../constants/Colors';

const StartGameScreen = props => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.gameScreen}>
                <Text style={styles.title}>Start a new Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCapitalize= "none"
                        autoCorrect= {false}
                        maxLength={2}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='reset' color={Colors.secondary} />
                        <Button title='confirm' color={Colors.primary} />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

styles = StyleSheet.create({
    gameScreen: {
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
    },
    input: {
        width: 50,
        marginVertical: 20,
    }

});

export default StartGameScreen;