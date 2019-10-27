import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';
import Envelope from '../envelope.compnent';
import Shredder from '../shredder.component';
import AnimationWrapper from './animation-wrapper.component';

const ShredAnimation = (props: IAnimationProps) => {
    const window = Dimensions.get('window');
    const animationRef = useRef();

    const [firstGo, setFirstGo] = useState(false);
    const [secondGo, setSecondGo] = useState(false);

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        setFirstGo(true);

        // @ts-ignore
        //await animationRef.current.fadeOut(Animations.animationStepTime);
    };

    const animateDown = async () => {
        // @ts-ignore
        await animationRef.current.animate(Animations.drop(window.height), Animations.animationStepTime);

        props.animationComplete();
    };

    return (
        <>
            <Animatable.View ref={animationRef} useNativeDriver style={[styles.fade, sharedStyles.sidePadding]}>
                <Envelope showClosed={true} />
            </Animatable.View>

            <View style={styles.positioning}>
                {firstGo && (
                    <View style={styles.shredder}>
                        <AnimationWrapper animation={Animations.slideIn} startAnimation={firstGo} animationComplete={animateDown}>
                            <Shredder animating={false} />
                        </AnimationWrapper>
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
    shredder: {
        position: 'absolute',
        height: '100%',
        top: '50%',
        right: 0,
        width: '100%',
    },
});

export default ShredAnimation;
