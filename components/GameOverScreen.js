import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import Card from './Card';
import CustomButton from './CustomButton';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text style={styles.title}>Game Over</Text>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/success.png")} resizeMode="cover" style={styles.image} />
            </View>
            <Card >
                <Text style={styles.summary}>The Number was: <Text style={styles.result}>{props.selectedNumber}</Text> </Text>
                <Text style={styles.summary}>Total guesses it took: <Text style={styles.result}>{props.totalGuesses}</Text> </Text>
                <View style={styles.buttonContainer}>
                    <CustomButton onClick={props.onRestart}>Play Again</CustomButton>
                </View>
            </Card>
        </View>
        </ScrollView>
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
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        overflow: 'hidden',
        marginVertical: 30,
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
        marginTop: 10,
        alignItems: 'center'
    },
    result: {
        color: Colors.secondary
    }
});

export default GameOverScreen;