import React from 'react';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';
import Envelope from '../envelope.compnent';
import FireWave from './fire-wave.component';
import { View } from 'react-native';

const AnimationContent = (props: IAnimationProps) => {
    const animationChoices = [
        {
            component: FireWave,
            props: {
                startAnimation: true,
                width: 300,
                animationComplete: props.animationComplete,
            },
        },
        {
            component: FireWave,
            props: {
                startAnimation: true,
                width: 100,
                animationComplete: props.animationComplete,
            },
        },
    ];

    const randomAnimation = Math.floor(Math.random() * animationChoices.length);

    const ChosenAnimation = animationChoices[randomAnimation].component;
    const chosenAnimationProps = animationChoices[randomAnimation].props;

    return (
        <View style={sharedStyles.wrapper}>
            <Envelope showClosed={true} />
            <ChosenAnimation {...chosenAnimationProps} />
            {/*<ShredderAnimation startAnimation={true} animationComplete={props.animationComplete} />*/}
        </View>
    );
};

export default AnimationContent;
