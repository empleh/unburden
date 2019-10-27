import React, { useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';

const AnimationWrapper = (props: { animation: () => void; children?: {} } & IAnimationProps) => {
    const animationRef = useRef();
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = async () => {
        setTimeout(() => {
            setShowChildren(true);
        }, 100);

        // @ts-ignore
        await animationRef.current.animate(props.animation(), Animations.animationStepTime);

        props.animationComplete();
    };

    return (
        <Animatable.View ref={animationRef} useNativeDriver style={sharedStyles.clearWrapper}>
            {showChildren && props.children}
        </Animatable.View>
    );
};

export default AnimationWrapper;
