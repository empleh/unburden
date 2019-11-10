import React from 'react';
import { StyleSheet, View } from 'react-native';
import useKeyboardEvents from '../hooks/keyboard.hooks';
import AppButton from './app-button.component';

const ReleaseButton = (props: { startAnimation: () => void; animationRunning: boolean }) => {
    const { keyboardOpen, screenHeight } = useKeyboardEvents();

    if (!keyboardOpen || props.animationRunning) {
        return null;
    }

    const buttonTop = screenHeight + 20;

    return (
        <View style={[styles.actions, { top: buttonTop }]}>
            <View style={styles.buttonPosition}>
                <AppButton text="Let Go" onPress={props.startAnimation} style={styles.floatingButton} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 10,
    },
    buttonPosition: {
        width: 200,
        height: 60,
    },
    floatingButton: {
        backgroundColor: '#669277',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        elevation: 24,
    },
});

export default ReleaseButton;
