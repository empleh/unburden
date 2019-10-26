import React, { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import sharedStyles from '../sharedStyles';
import { IAnimationProps } from '../models/animation.props';
import Envelope from './envelope.compnent';

const EnvelopeWrapper = (props: IAnimationProps & {showEnvelope: boolean}) => {
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

    if (!props.showEnvelope) {
        return null;
    }

    return (
        <View style={styles.staticEnvelope}>
            <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.clearWrapper]}>
                <Envelope showClosed={props.startAnimation} />
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    staticEnvelope: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        height: '40%',
    },
});

export default EnvelopeWrapper;
