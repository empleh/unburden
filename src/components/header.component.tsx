import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyleVariables } from '../style_variables';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.side} />
            <View style={styles.center}>
                <Text style={styles.title}>Unburden</Text>
            </View>
            <View style={styles.side}>
                <Text>Why?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: 'row',
    },
    side: {
        width: 60,
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
    },
});

export default Header;
