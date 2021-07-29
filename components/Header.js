import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90,
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 40,
    }
});


export default Header;