import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import useKeyboardEvents from '../hooks/keyboard.hooks';
import sharedStyles from "../sharedStyles";

const ReleaseButton = (props: { startAnimation: () => void; animationRunning: boolean }) => {
    const { keyboardOpen, screenHeight } = useKeyboardEvents();

    if (!keyboardOpen || props.animationRunning) {
        return null;
    }

    const buttonTop = screenHeight + 20;

    return (
        <View style={[styles.actions, { top: buttonTop }]}>
            <View style={styles.floatingButton}>
                <Button onPress={props.startAnimation} title={'Release It'} color={'white'} />
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
    floatingButton: {
        width: 200,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#669277',
        justifyContent: 'center',
        ...sharedStyles.elevationLarge,
    },
});

export default ReleaseButton;
