import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.chosenNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
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