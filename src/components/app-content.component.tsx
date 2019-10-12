import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { INavigationProps } from "../models/navigation-props";
import Header from './header.component';
import Separator from './separator.component';
import BottomAnimation from './bottom-animation.component';
import MessageEntry from './message-entry.component';
import ReleaseButton from './release-button.component';

const ApplicationContent = (props: INavigationProps) => {
    const [animating, setAnimating] = useState(false);
    const unburdenMessage = () => {
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
            <MessageEntry triggerClear={animating} onClearComplete={clearComplete} />
            <Separator animating={animating} />
            <BottomAnimation triggerClear={animating} />

            <ReleaseButton unburdenMessage={unburdenMessage} animating={animating} />
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
