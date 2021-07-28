import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


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
        backgroundColor: '#f7297b'
    },
    title: {
        fontSize: 40,
    }

})


export default Header;