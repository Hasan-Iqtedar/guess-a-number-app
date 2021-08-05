import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

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
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90,
        backgroundColor: Platform.OS == 'ios' ? 'white' : Colors.primary,
        borderColor: Platform.OS == 'ios' ? Colors.primary : 'transparent',
        borderBottomWidth: Platform.OS == 'ios' ? 2 : 0
    },
    title: {
        fontSize: 40,
        color: Platform.OS == 'ios' ? Colors.primary : 'black',
    }
});


export default Header;