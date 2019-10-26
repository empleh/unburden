import React, { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import sharedStyles from '../sharedStyles';
import { IAnimationProps } from '../models/animation.props';
import { StyleVariables } from '../style_variables';
import Envelope from './envelope.compnent';

const EnvelopeWrapper = (props: IAnimationProps & { showEnvelope: boolean }) => {
    const animationRef = useRef();
    const window = Dimensions.get('window');

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        // @ts-ignore
        await animationRef.current.animate(Animations.raiseEnvelope(window.height), Animations.animationStepTime);

        props.animationComplete();
    };

    /*    if (!props.showEnvelope) {
        return null;
    }*/

    return (
        <>
            <View style={[styles.staticEnvelope]}>
                <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.clearWrapper]}>
                    <Envelope showClosed={props.startAnimation} />
                </Animatable.View>
            </View>
            <View style={styles.bottomCover} />
        </>
    );
};

const styles = StyleSheet.create({
    staticEnvelope: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        height: '36%',
        borderColor: 'white',
        zIndex: 2,
        marginLeft: StyleVariables.space.large,
        marginRight: StyleVariables.space.large,
        marginBottom: StyleVariables.space.large + StyleVariables.space.small,
    },
    bottomCover: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: (StyleVariables.space.large * 2)  + StyleVariables.space.small * 2,
        zIndex: 1
    },
});

export default EnvelopeWrapper;
