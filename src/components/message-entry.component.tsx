import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Animations } from '../animations';
import { StyleVariables } from '../style_variables';
import * as Animatable from 'react-native-animatable';

const MessageEntry = (props: { triggerClear: boolean; onClearComplete: () => void }) => {
    const window = Dimensions.get('window');
    const [message, setMessage] = useState('');
    const animationRef = useRef();

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
    };

    const callToAction = 'Express your feelings';
    const sad = 'What\'s got you feeling down?';
    const upset = 'Upset about something?';
    const release = 'Then release it into the universe';

    const inputProps = {
        style: styles.input,
        onChangeText: setMessage,
        value: message,
        multiline: true,
        placeholder: `${callToAction}\n\n\n${sad}\n${upset}\n\n\n${release}`,
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={styles.wrapper}>
            <ImageBackground source={require('../../assets/paper.png')} style={styles.paperBackground} resizeMode="stretch">
                <View style={styles.inputWrapper}>
                    <TextInput {...inputProps} />
                </View>
            </ImageBackground>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
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