import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import sharedStyles from '../sharedStyles';

const AppButton = (props: { text: string; onPress: () => void; style: {} }) => {
    return (
        <View style={[styles.box, sharedStyles.elevationLarge, props.style]}>
            <TouchableOpacity onPress={props.onPress} style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        justifyContent: 'center',
    },
    buttonWrapper: {
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    box: {
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 0,
        flex: 1,
    },
});

export default AppButton;
