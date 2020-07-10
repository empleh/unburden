import React from 'react';
import { IAnimationProps } from '../../models/animation-props';
import sharedStyles from '../../sharedStyles';
import { View } from 'react-native';
import Fireworks from './fireworks.component';
import ShredAnimation from './shred-animation.component';

const AnimationContent = ({ animationComplete }: Partial<IAnimationProps>) => {
    const animationChoices = [
        /*{
            component: Fireworks,
            props: {
                animating: true,
                animationComplete: props.animationComplete,
            },
        },*/
        {
            component: ShredAnimation,
            props: {
                animating: true,
                animationComplete,
            },
        },
    ];

    const randomAnimation = Math.floor(Math.random() * animationChoices.length);

    const ChosenAnimation = animationChoices[randomAnimation].component;
    const chosenAnimationProps = animationChoices[randomAnimation].props;
    chosenAnimationProps.animating = true;

    return (
        <View style={[sharedStyles.wrapper, sharedStyles.sidePadding]}>
            <ChosenAnimation {...chosenAnimationProps} />
        </View>
    );
};

export default AnimationContent;
