import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

import Card from './Card';
import Colors from '../constants/Colors';

const NumberContainer = props => {
    return (
        <Card style={styles.container}>
            <Text style={styles.textContainer}>You Selected</Text>
            <Text style={styles.number}>{props.chosenNumber}</Text>
            <Button title="START" color={Colors.primary} />
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
        width: '80%'
    },
    textContainer: {
        color: Colors.textColor,
        fontSize: 15,
    },
    number: {
        marginVertical: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.secondary,
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        borderRadius: 9
    }
});

export default NumberContainer;