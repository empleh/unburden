import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import Images from '../images';
import sharedStyles from '../sharedStyles';
import { StyleVariables } from '../style_variables';
import Envelope from './envelope-wrapper.compnent';
import { IAnimationProps } from '../models/animation.props';

const MessageInput = (props: IAnimationProps) => {
    const window = Dimensions.get('window');
    const [message, setMessage] = useState('');
    const animationRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        // @ts-ignore
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        // @ts-ignore
        await animationRef.current.animate(Animations.flyOffPage(window.height), Animations.animationStepTime);

        props.animationComplete();
    };

    const callToAction = 'type out your feelings';
    const upset = 'upset?';
    const frustrated = 'stressed?';
    const release = 'release the negativity';

    const inputProps = {
        style: styles.input,
        onChangeText: setMessage,
        value: message,
        multiline: true,
        placeholder: `${upset}    ${frustrated}\n\n${callToAction}\n\n${release}`,
        autoFocus: true,
        ref: inputRef,
    };

    return (
        <View style={sharedStyles.wrapper}>
            <Animatable.View ref={animationRef} useNativeDriver style={sharedStyles.wrapper}>
                <ImageBackground
                    source={Images.paperBackground}
                    style={[sharedStyles.paperBackground, sharedStyles.elevationLarge]}
                    resizeMode="stretch"
                >
                    <View style={styles.inputWrapper}>
                        <TextInput {...inputProps} />
                    </View>
                </ImageBackground>
            </Animatable.View>
            <Envelope startAnimation={false} />
        </View>
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
        fontSize: 16,
    },
});

export default MessageInput;
