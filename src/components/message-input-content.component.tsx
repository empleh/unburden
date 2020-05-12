import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';
import Images from '../images';
import { INavigationProps } from "../models/navigation-props";
import sharedStyles from '../sharedStyles';
import { StyleVariables } from '../style_variables';

export interface IMessageInputContentProps extends INavigationProps {
    placeholder: string;
    prompt: string;
    blockKeyboard?: boolean;
}

const MessageInputContent = ({ placeholder, prompt, blockKeyboard, navigation }: IMessageInputContentProps) => {
    const [message, setMessage] = useState('');
    const inputRef = useRef();

    const setFocus = () => {
        if (inputRef && inputRef.current && !blockKeyboard) {
            // @ts-ignore
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        setFocus();
    }, []);

    useEffect(() => {
        const subToFocus = navigation.addListener('willFocus', () => {
            setFocus();
        });
        return () => {
            // @ts-ignore
            if (subToFocus && subToFocus.unsubscribe) {
                // @ts-ignore
                subToFocus.unsubscribe();
            }
        };
    }, []);

    const inputProps = {
        style: [styles.input, sharedStyles.alignTextTop],
        onChangeText: setMessage,
        value: message,
        multiline: true,
        placeholder: placeholder,
        autoFocus: !blockKeyboard,
        ref: inputRef,
    };

    return (
        <ImageBackground
            source={Images.paperBackground}
            style={[sharedStyles.paperBackground, sharedStyles.elevationLarge, { zIndex: 10 }]}
            resizeMode="stretch"
        >
            <View style={[styles.inputWrapper]}>
                <Text style={[styles.inputPrompt]}>{prompt}</Text>
                <TextInput {...inputProps} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        paddingTop: StyleVariables.space.large,
        paddingBottom: StyleVariables.space.large,
        paddingLeft: StyleVariables.space.large,
        paddingRight: StyleVariables.space.large,
        zIndex: 1,
    },
    input: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        fontSize: StyleVariables.text.inputSize,
    },
    inputPrompt: {
        color: StyleVariables.colors.label,
        paddingBottom: StyleVariables.space.small,
        fontSize: StyleVariables.text.inputSize,
    },
});

export default MessageInputContent;
