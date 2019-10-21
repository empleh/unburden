import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { INavigationProps } from '../models/navigation-props';
import Header from './header.component';
import MessageEntry from './message-entry.component';
import ReleaseButton from './release-button.component';

const ApplicationContent = (props: INavigationProps) => {
    const [animating, setAnimating] = useState(false);
    const startAnimation = () => {
        Keyboard.dismiss();
        setAnimating(true);
    };
    const clearComplete = () => {
        setAnimating(false);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />

            <Header navigation={props.navigation} showWhy={true} />

            <MessageEntry navigation={props.navigation} startAnimation={animating} animationComplete={clearComplete} />

            <ReleaseButton startAnimation={startAnimation} animationRunning={animating} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
});

export default ApplicationContent;
