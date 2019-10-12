import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Animations } from '../animations';
import { INavigationProps } from '../models/navigation-props';
import { StyleVariables } from '../style_variables';
import * as Animatable from 'react-native-animatable';

export interface IMessageProps extends INavigationProps {
    triggerClear: boolean;
    onClearComplete: () => void;
}

const MessageEntry = (props: IMessageProps) => {
    const window = Dimensions.get('window');
    const [message, setMessage] = useState('');
    const animationRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const subToFocus = props.navigation.addListener('willFocus', () => {
            // @ts-ignore
            inputRef.current.focus();
        });
        return () => {
            if (subToFocus) {
                // @ts-ignore
                subToFocus.unsubscribe();
            }
        };
    }, []);

    useEffect(() => {
        if (props.triggerClear && animationRef && animationRef.current) {
            runClearAnimation();
        }
    }, [props.triggerClear]);

    const runClearAnimation = async () => {
        // @ts-ignore
        await animationRef.current.animate(Animations.drop(window.height), Animations.mainAnimationTime);
        setMessage('');

        // @ts-ignore
        await animationRef.current.animate(Animations.slideIn(), Animations.secondaryAnimationTime);
        props.onClearComplete();

        // @ts-ignore
        inputRef.current.focus();
    };

    const callToAction = 'express your feelings';
    const sad = 'feeling down?';
    const upset = 'upset?';
    const frustrated = 'stressed?';
    const release = 'release the negativity';

    const inputProps = {
        style: styles.input,
        onChangeText: setMessage,
        value: message,
        multiline: true,
        placeholder: `${upset}\n${frustrated}\n${sad}\n\n\n${callToAction}\n\n\n${release}`,
        autoFocus: true,
        ref: inputRef,
    };

    return (
        <View style={styles.top}>
            <Animatable.View ref={animationRef} useNativeDriver style={styles.wrapper}>
                <ImageBackground source={require('../../assets/paper.png')} style={styles.paperBackground} resizeMode="stretch">
                    <View style={styles.inputWrapper}>
                        <TextInput {...inputProps} />
                    </View>
                </ImageBackground>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        flex: 4,
    },
    wrapper: {
        paddingTop: StyleVariables.space.large,
        paddingBottom: StyleVariables.space.large * 2,
        paddingLeft: StyleVariables.space.large * 2,
        paddingRight: StyleVariables.space.large * 2,
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
    },
    inputWrapper: {
        paddingTop: StyleVariables.space.large,
        paddingBottom: StyleVariables.space.large,
        paddingLeft: StyleVariables.space.large,
        paddingRight: StyleVariables.space.large,
    },
    input: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        fontSize: 16,
    },
});

export default MessageEntry;
