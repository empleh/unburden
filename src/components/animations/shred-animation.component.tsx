import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';
import Envelope from '../envelope.compnent';
import FireWave from './fire-wave.component';

const ShredAnimation = (props: IAnimationProps) => {
    const window = Dimensions.get('window');
    const animationRef = useRef();

    const [firstGo, setFirstGo] = useState(false);

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        setFirstGo(true);

        // @ts-ignore
        await animationRef.current.fadeOut(Animations.animationStepTime);
    };

    return (
        <>
            <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.sidePadding]}>
                <Envelope showClosed={true} />
            </Animatable.View>
        </>
    );
};

const styles = StyleSheet.create({
    positioning: {
        position: 'absolute',
        backgroundColor: 'transparent',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
    },
});

export default ShredAnimation;
