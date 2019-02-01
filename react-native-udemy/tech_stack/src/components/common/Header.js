import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainerStyle}>
            <Text style={styles.headerTitleStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainerStyle: {
        backgroundColor: '#0000b3',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center'
    },
    headerTitleStyle: {
        color: '#fff',
        fontSize: 18
    }
});

export { Header };