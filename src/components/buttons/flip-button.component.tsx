import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useAnimationFunctions, useAnimationState } from '../../contexts/animation.context';
import useKeyboardEvents from '../../hooks/keyboard.hooks';
import Images from '../../images';
import AppButton from './app-button.component';

const FlipButton = () => {
    const { keyboardOpen, screenHeight } = useKeyboardEvents();
    const { isAnimating } = useAnimationState();
    const { flipMode } = useAnimationFunctions();

    if (!keyboardOpen || isAnimating) {
        return null;
    }

    const buttonTop = screenHeight + 16;

    return (
        <View style={[styles.actions, { top: buttonTop }]}>
            <View style={styles.buttonPosition}>
                <AppButton onPress={flipMode} style={styles.floatingButton}>
                    <Image source={Images.flipIcon} style={styles.image} />
                </AppButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 8,
    },
    buttonPosition: {
        width: 64,
        height: 64,
    },
    floatingButton: {
        backgroundColor: '#5EA9BE',
        justifyContent: 'center',
        borderRadius: 32,
    },
    image: {
        tintColor: 'white',
        backgroundColor: 'transparent',
        height: 32,
        width: 32,
    },
});

export default FlipButton;
