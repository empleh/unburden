import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Animations } from '../animations';
import { StyleVariables } from '../style_variables';
import * as Animatable from 'react-native-animatable';

const BottomAnimation = (props: { triggerClear: boolean }) => {
    const window = Dimensions.get('window');
    const [elementHeight, setElementHeight] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const animationRef = useRef();

    useEffect(() => {
        if (props.triggerClear && animationRef && animationRef.current) {
            runBottomAnimation();
        }
    }, [props.triggerClear]);

    const runBottomAnimation = async () => {
        await Animations.sleep(1000);
        setShowContent(true);
        // @ts-ignore
        await animationRef.current.animate(Animations.grow(elementHeight), Animations.mainAnimationTime / 2);

        // @ts-ignore
        await animationRef.current.animate(Animations.drop(window.height), Animations.mainAnimationTime / 2);

        setShowContent(false);
    };

    const layoutComplete = event => {
        setElementHeight(event.nativeEvent.layout.height);
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={styles.wrapper} onLayout={layoutComplete}>
            <ImageBackground source={showContent ? require('../assets/paper.png') : null} style={styles.paperBackground} resizeMode="stretch" />
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: StyleVariables.space.large,
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
});

export default BottomAnimation;
