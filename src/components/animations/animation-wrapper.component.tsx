import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { useAnimationFunctions, useAnimationState } from '../../contexts/animation.context';
import sharedStyles from '../../sharedStyles';

const AnimationWrapper = ({ children }: PropsWithChildren<{}>) => {
    const animationRef = useRef();
    const [showChildren, setShowChildren] = useState(false);
    const { animationComplete, getCurrentAnimation } = useAnimationFunctions();
    const { animateWrapper, alwaysShowChildren } = useAnimationState();

    useEffect(() => {
        if (animateWrapper) {
            runAnimation();
        }
    }, [animateWrapper]);

    const runAnimation = async () => {
        setTimeout(() => {
            setShowChildren(true);
        }, 100);

        // @ts-ignore
        await animationRef.current.animate(getCurrentAnimation(), Animations.animationStepTime);

        animationComplete();
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={sharedStyles.clearWrapper}>
            {showChildren || (alwaysShowChildren && children)}
        </Animatable.View>
    );
};

export default AnimationWrapper;
