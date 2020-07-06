import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import useKeyboardEvents from '../../hooks/keyboard.hooks';
import Images from "../../images";
import AppButton from './app-button.component';

//Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const FlipButton = (props: { flipMode: () => void; animationRunning: boolean }) => {
    const { keyboardOpen, screenHeight } = useKeyboardEvents();

    if (!keyboardOpen || props.animationRunning) {
        return null;
    }

    const buttonTop = screenHeight + 16;

    return (
        <View style={[styles.actions, { top: buttonTop }]}>
            <View style={styles.buttonPosition}>
                <AppButton onPress={props.flipMode} style={styles.floatingButton}>
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
    image:{
        tintColor: 'white',
        backgroundColor: 'transparent',
        height: 32,
        width: 32,
    }
});

export default FlipButton;
