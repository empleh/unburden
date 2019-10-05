import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import Actions from './actions.component';
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
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text>Unburden yourself</Text>
                <MessageEntry triggerClear={triggerClear} onClearComplete={clearComplete} />
             </View>
            <View style={styles.bottom}>
                <Actions unburdenMessage={unburdenMessage} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    top: {
        flex: 2,
    },
    bottom: {
        flex: 3,
    },
});

export default ApplicationContent;
