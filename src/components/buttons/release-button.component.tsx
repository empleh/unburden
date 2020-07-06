import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useKeyboardEvents from '../../hooks/keyboard.hooks';
import AppButton from './app-button.component';

const ReleaseButton = (props: { startAnimation: () => void; animationRunning: boolean }) => {
    const { keyboardOpen, screenHeight } = useKeyboardEvents();

    if (!keyboardOpen || props.animationRunning) {
        return null;
    }

    const buttonTop = screenHeight + 16;

    return (
        <View style={[styles.actions, { top: buttonTop }]}>
            <View style={styles.buttonPosition}>
                <AppButton onPress={props.startAnimation} style={styles.floatingButton}>
                    <Text style={styles.buttonText}>Let Go</Text>
                </AppButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 8,
    },
    buttonPosition: {
        width: 128,
        height: 64,
    },
    floatingButton: {
        backgroundColor: '#669277',
        justifyContent: 'center',
        borderRadius: 32,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default ReleaseButton;
