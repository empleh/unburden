import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { StyleVariables } from '../style_variables';
import Actions from './actions.component';
import BottomAnimation from './bottom-animation.component';
import MessageEntry from './message-entry.component';

const ApplicationContent = () => {
    const [triggerClear, setClearing] = useState(false);
    const unburdenMessage = () => {
        Keyboard.dismiss();
        setClearing(true);
    };
    const clearComplete = () => {
        setClearing(false);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
            <View style={styles.top}>
                <Text style={styles.header}>Unburden yourself</Text>
                <MessageEntry triggerClear={triggerClear} onClearComplete={clearComplete} />
            </View>
            <View style={styles.actions}>
                <Actions unburdenMessage={unburdenMessage} />
            </View>
            <View style={styles.bottom}>
                <BottomAnimation triggerClear={triggerClear} />
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
    actions: {
        flex: 1,
        marginTop: StyleVariables.space.large,
    },
    bottom: {
        flex: 4,
        backgroundColor: 'white',
    },
});

export default ApplicationContent;
