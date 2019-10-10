import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StyleVariables } from '../style_variables';

const Separator = () => {
    return (
        <View style={styles.shredder}>
            <View style={styles.offLight}></View>
            <View style={styles.onLight}></View>
            <View style={styles.bottom}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    shredder: {
        flex: 1,
        marginTop: StyleVariables.space.standard,
        backgroundColor: '#aaa',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexDirection: 'row'
    },
    onLight: {},
    offLight: {},
    bottom: {
        backgroundColor: '#666',
        height: 24,
        width: '100%',
        alignSelf: 'flex-end',
    },
});

export default Separator;
