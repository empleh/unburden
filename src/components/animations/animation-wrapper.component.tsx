import React, { useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';

export interface IAnimationWrapperProps extends IAnimationProps {
    alwaysShowChildren?: boolean;
    animation: () => void;
    children?: {};
}

const AnimationWrapper = ({ animation, alwaysShowChildren, startAnimation, animationComplete, children }: IAnimationWrapperProps) => {
    const animationRef = useRef();
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            runAnimation();
        }
    }, [startAnimation]);

    const runAnimation = async () => {
        setTimeout(() => {
            setShowChildren(true);
        }, 100);

        // @ts-ignore
        await animationRef.current.animate(animation(), Animations.animationStepTime);

        animationComplete();
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={sharedStyles.clearWrapper}>
            {showChildren || alwaysShowChildren && children}
        </Animatable.View>
    );
};

export default AnimationWrapper;
