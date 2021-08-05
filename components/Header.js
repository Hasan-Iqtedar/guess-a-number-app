import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={{ ...styles.BaseHeader, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    BaseHeader: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 90,
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 40,
        color: Platform.OS == 'ios' ? Colors.primary : 'black',
    }
});


export default Header;