import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation-props';
import sharedStyles from '../../sharedStyles';
import Envelope from '../envelope/envelope.compnent';
import FireWave from './fire-wave.component';

const Fireworks = ({ animating, animationComplete }: IAnimationProps) => {
    const window = Dimensions.get('window');
    const animationRef = useRef();

    const [firstGo, setFirstGo] = useState(false);

    useEffect(() => {
        if (animating) {
            runAnimation();
        }
    }, [animating]);

    const runAnimation = async () => {
        setFirstGo(true);

        // @ts-ignore
        await animationRef.current.fadeOut(Animations.animationStepTime);
    };

    return (
        <>
            <Animatable.View ref={animationRef} useNativeDriver style={[styles.fade, sharedStyles.sidePadding]}>
                <Envelope />
            </Animatable.View>

            <View style={styles.positioning}>
                {firstGo && (
                    <View style={styles.first}>
                        <FireWave width={window.width} animating={firstGo} animationComplete={animationComplete} />
                    </View>
                )}
            </View>
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
    fade: {
        position: 'absolute',
        backgroundColor: 'transparent',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
    },
    first: {
        position: 'absolute',
        height: '100%',
        top: '-10%',
        right: 0,
        width: '100%',
    },
});

export default Fireworks;
