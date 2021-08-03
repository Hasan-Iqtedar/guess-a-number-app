import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const CustomButton = props => {
    return (
        <TouchableOpacity onPress={props.onClick} activeOpacity='0.7'>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={{...styles.text, ...props.textStyle}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.primary,
        borderRadius: 25,
        width: 130,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default CustomButton;
