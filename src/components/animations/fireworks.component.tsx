import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from "../../sharedStyles";
import Envelope from '../envelope.compnent';
import FireWave from './fire-wave.component';

const Fireworks = (props: { width: number } & IAnimationProps) => {
    const window = Dimensions.get('window');
    const animationRef = useRef();

    const [firstGo, setFirstGo] = useState(false);
    const [secondGo, setSecondGo] = useState(false);
    const [thirdGo, setThirdGo] = useState(false);

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        setFirstGo(true);

        // @ts-ignore
        await animationRef.current.fadeOut(Animations.animationStepTime * 4);
    };

    const firstDone = () => {
        setFirstGo(false);
        setSecondGo(true);
    };

    const secondDone = () => {
        setSecondGo(false);
        setThirdGo(true);
    };

    return (
        <>
            <Animatable.View ref={animationRef} useNativeDriver style={[styles.fade, sharedStyles.sidePadding]}>
                <Envelope showClosed={true} />
            </Animatable.View>

            <View style={styles.positioning}>
                {firstGo && (
                    <View style={styles.first}>
                        <FireWave width={window.width / 3} startAnimation={firstGo} animationComplete={firstDone} />
                    </View>
                )}
                {secondGo && (
                    <View style={styles.second}>
                        <FireWave width={window.width / 2} startAnimation={secondGo} animationComplete={secondDone} />
                    </View>
                )}
                {thirdGo && (
                    <View style={styles.third}>
                        <FireWave width={window.width} startAnimation={thirdGo} animationComplete={props.animationComplete} />
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
        top: '10%',
        left: 0,
        width: '100%',
    },
    second: {
        position: 'absolute',
        height: '100%',
        top: 0,
        left: '50%',
        width: '50%',
    },
    third: {
        position: 'absolute',
        height: '100%',
        top: 0,
        right: 0,
        width: '100%',
    },
});

export default Fireworks;
