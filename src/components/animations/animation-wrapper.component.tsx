import React, { PropsWithChildren, useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { useAnimationFunctions, useAnimationState } from '../../contexts/animation.context';
import sharedStyles from '../../sharedStyles';

const AnimationWrapper = ({ children }: PropsWithChildren<{}>) => {
    const animationRef = useRef();
    const { completeReset } = useAnimationFunctions();
    const { animatingReset } = useAnimationState();

    useEffect(() => {
        if (animatingReset) {
            runAnimation();
        }
    }, [animatingReset]);

    const runAnimation = async () => {
        // @ts-ignore
        await animationRef.current.animate(Animations.slideIn(), Animations.animationStepTime);

        completeReset();
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={sharedStyles.clearWrapper}>
            {children}
        </Animatable.View>
    );
};

export default AnimationWrapper;
