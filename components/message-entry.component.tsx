import React from 'react';
import { TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { StyleVariables } from '../style_variables';

const MessageEntry = (props: { message: string; setMessage: (value: string) => void }) => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground source={require('../assets/paper.png')} style={styles.paperBackground} resizeMode="stretch">
                <TextInput style={styles.paper} onChangeText={props.setMessage} value={props.message} multiline={true} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: StyleVariables.space.large,
        backgroundColor: 'white',
    },
    paperBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
        paddingTop: StyleVariables.space.large,
    },
    paper: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        fontSize: 16,
        padding: StyleVariables.space.large,
    },
});

export default MessageEntry;
