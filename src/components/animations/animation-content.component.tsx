import React from 'react';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';
import { View } from 'react-native';
import Fireworks from './fireworks.component';
import ShredAnimation from './shred-animation.component';

const AnimationContent = (props: IAnimationProps) => {
    const animationChoices = [
        {
            component: Fireworks,
            props: {
                startAnimation: true,
                animationComplete: props.animationComplete,
            },
        },
        /*      {
            component: ShredAnimation,
            props: {
                startAnimation: true,
                width: 100,
                animationComplete: props.animationComplete,
            },
        },*/
    ];

    const randomAnimation = Math.floor(Math.random() * animationChoices.length);

    const ChosenAnimation = animationChoices[randomAnimation].component;
    const chosenAnimationProps = animationChoices[randomAnimation].props;
    chosenAnimationProps.startAnimation = true;

    return (
        <View style={[sharedStyles.wrapper, sharedStyles.sidePadding]}>
            <ChosenAnimation {...chosenAnimationProps} />
        </View>
    );
};

export default AnimationContent;
