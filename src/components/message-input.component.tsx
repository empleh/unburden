import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import Images from '../images';
import { INavigationProps } from '../models/navigation-props';
import sharedStyles from '../sharedStyles';
import { StyleVariables } from '../style_variables';
import EnvelopeBackground from './envelope-background.compnent';
import EnvelopeWrapper from './envelope-wrapper.compnent';
import { IAnimationProps } from '../models/animation.props';

const MessageInput = (props: { blockKeyboard?: boolean; coverFooter?: (cover: boolean) => void } & IAnimationProps & INavigationProps) => {
    const window = Dimensions.get('window');
    const [message, setMessage] = useState('');
    const animationRef = useRef();
    const foregroundRef = useRef();
    const backgroundRef = useRef();
    const inputRef = useRef();

    const setFocus = () => {
        if (inputRef && inputRef.current && !props.blockKeyboard) {
            // @ts-ignore
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        setFocus();
    }, []);

    useEffect(() => {
        const subToFocus = props.navigation.addListener('willFocus', () => {
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

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        // @ts-ignore
        foregroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);
        // @ts-ignore
        backgroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);
        // await envelopeRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);
        await Animations.sleep(Animations.animationStepTime);

        props.coverFooter(true);

        // @ts-ignore
        await animationRef.current.animate(Animations.noteIntoEnvelope(window.height), Animations.animationStepTime);

        props.animationComplete();
    };

    const callToAction = 'type out your feelings';
    const upset = 'upset?';
    const frustrated = 'stressed?';
    const release = 'release the negativity';

    const inputProps = {
        style: [styles.input, sharedStyles.alignTextTop],
        onChangeText: setMessage,
        value: message,
        multiline: true,
        placeholder: `${upset}    ${frustrated}\n\n${callToAction}\n\n${release}`,
        autoFocus: !props.blockKeyboard,
        ref: inputRef,
    };

    return (
        <View style={[sharedStyles.wrapper, sharedStyles.sidePadding]}>
            <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.wrapper, { zIndex: 10 }]}>
                <ImageBackground
                    source={Images.paperBackground}
                    style={[sharedStyles.paperBackground, sharedStyles.elevationLarge, { zIndex: 10 }]}
                    resizeMode="stretch"
                >
                    <View style={[styles.inputWrapper]}>
                        <TextInput {...inputProps} />
                    </View>
                </ImageBackground>
            </Animatable.View>
            <Animatable.View ref={backgroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 1 }]}>
                <EnvelopeBackground startAnimation={false} showEnvelope={props.startAnimation} />
            </Animatable.View>
            <Animatable.View ref={foregroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 20 }]}>
                <EnvelopeWrapper startAnimation={false} showEnvelope={props.startAnimation} />
            </Animatable.View>
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
