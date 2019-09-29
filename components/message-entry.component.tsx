import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const MessageEntry = (props: { message: string; setMessage: (value: string) => void }) => {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.paper} onChangeText={props.setMessage} value={props.message} multiline={true} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper:{
      padding: 24
    },
    paper: {
        padding: 24,
        backgroundColor: '#dfcd87',
        height: '100%'
    },
});

export default MessageEntry;
