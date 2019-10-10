import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Keyboard, Dimensions } from 'react-native';
import { StyleVariables } from '../style_variables';
import Separator from './separator.component';
import BottomAnimation from './bottom-animation.component';
import MessageEntry from './message-entry.component';
import ReleaseButton from './release-button.component';

const ApplicationContent = () => {
    const window = Dimensions.get('window');
    const [triggerClear, setClearing] = useState(false);
    const unburdenMessage = () => {
        Keyboard.dismiss();
        setClearing(true);
    };
    const clearComplete = () => {
        setClearing(false);
    };

    const buttonTop = (window.height / 2) - 72;

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />

            <View style={styles.top}>
                <Text style={styles.header}>Unburden</Text>
                <MessageEntry triggerClear={triggerClear} onClearComplete={clearComplete} />
            </View>
            <View style={styles.separator}>
                <Separator />
            </View>
            <View style={styles.bottom}>
                <BottomAnimation triggerClear={triggerClear} />
            </View>
            <View style={[styles.actions, { top: buttonTop }]}>
                <ReleaseButton unburdenMessage={unburdenMessage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    header: {
        textAlign: 'center',
        paddingTop: StyleVariables.space.small,
        fontSize: 16,
    },
    top: {
        flex: 4,
    },
    separator: {
        flex: 1,
        marginTop: StyleVariables.space.large,
    },
    actions: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 10,
    },
    bottom: {
        flex: 4,
        backgroundColor: 'white',
    },
});

export default ApplicationContent;
