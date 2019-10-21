import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import sharedStyles from '../../sharedStyles';

const AnimationWrapper = (props: { animation: () => void; animationComplete: () => void; children?: {} }) => {
    const animationRef = useRef();

    useEffect(() => {
        runAnimation();
    }, []);

    const runAnimation = async () => {
        // @ts-ignore
        await animationRef.current.animate(props.animation(), Animations.animationStepTime);

        props.animationComplete();
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={sharedStyles.clearWrapper}>
            {props.children}
        </Animatable.View>
    );
};

export default AnimationWrapper;
