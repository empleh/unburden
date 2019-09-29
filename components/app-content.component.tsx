import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Actions from './actions.component';
import MessageEntry from './message-entry.component';

const ApplicationContent = () => {
    const [message, setMessage] = useState('');
    const unburdenMessage = () => {
        setMessage('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text>Unburden yourself</Text>
                <MessageEntry message={message} setMessage={setMessage} />
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
        flex: 1,
    },
    bottom: {
        flex: 1,
    },
});

export default ApplicationContent;
