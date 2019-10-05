import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { StyleVariables } from '../style_variables';
import * as Animatable from 'react-native-animatable';

const MessageEntry = (props: { triggerClear: boolean; onClearComplete: () => void }) => {
    const window = Dimensions.get('window');
    const [message, setMessage] = useState('');
    const animationRef = useRef();

    const dropAnimation = {
        0: {
            translateX: 0,
            translateY: 0,
        },
        1: {
            translateX: 0,
            translateY: window.height,
        },
    };

    const slideInAnimation = {
        0: {
            translateX: 100,
            translateY: -100,
        },
        1: {
            translateX: 0,
            translateY: 0,
        },
    };

    useEffect(() => {
        if (props.triggerClear && animationRef && animationRef.current) {
            // @ts-ignore
            animationRef.current.animate(dropAnimation, 8000).then(() => {
                setMessage('');

                // @ts-ignore
                animationRef.current.animate(slideInAnimation, 1000).then(() => {
                    props.onClearComplete();
                });
            });
        }
    }, [props.triggerClear]);

    return (
        <Animatable.View ref={animationRef} direction="alternate" useNativeDriver style={styles.wrapper}>
            <ImageBackground source={require('../assets/paper.png')} style={styles.paperBackground} resizeMode="stretch">
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} onChangeText={setMessage} value={message} multiline={true} />
                </View>
            </ImageBackground>
        </Animatable.View>
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
