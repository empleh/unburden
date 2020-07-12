import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, TextInput, View, Text } from 'react-native';
import { useAnimationFunctions, useAnimationState } from '../contexts/animation.context';
import Images from '../images';
import sharedStyles from '../sharedStyles';
import { StyleVariables } from '../style_variables';

const MessageInputContent = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef();
    const { isAnimating, messagePlaceholder, messagePrompt } = useAnimationState();
    const { navAddListener } = useAnimationFunctions();

    const setFocus = useCallback( () => {
        if (inputRef && inputRef.current && !isAnimating) {
            // @ts-ignore
            inputRef.current.focus();
        }
    }, [isAnimating]);

    useEffect(() => {
        if (!isAnimating) {
            setFocus();
        }
    }, [isAnimating, setFocus]);

    useEffect(() => {
        const subToFocus = navAddListener('willFocus', () => {
            setFocus();
        });
        return () => {
            // @ts-ignore
            if (subToFocus && subToFocus.unsubscribe) {
                // @ts-ignore
                subToFocus.unsubscribe();
            }
        };
    }, [navAddListener, setFocus]);

    const inputProps = {
        style: [styles.input, sharedStyles.alignTextTop],
        onChangeText: setMessage,
        value: message,
        multiline: true,
        placeholder: messagePlaceholder,
        autoFocus: !isAnimating,
        ref: inputRef,
    };

    return (
        <ImageBackground
            source={Images.paperBackground}
            style={[sharedStyles.paperBackground, sharedStyles.elevationLarge, { zIndex: 10 }]}
            resizeMode="stretch"
        >
            <View style={[styles.inputWrapper]}>
                <Text style={[styles.inputPrompt]}>{messagePrompt}</Text>
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
