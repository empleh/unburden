import React from 'react';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from "../../sharedStyles";
import Envelope from '../envelope.compnent';
import FireWave from './fire-wave.component';
import { View } from 'react-native';

const AnimationContent = (props: IAnimationProps) => {
    return (
        <View style={sharedStyles.wrapper}>
            <Envelope showClosed={true} />
            <FireWave width={300} startAnimation={true} animationComplete={props.animationComplete} />
        </View>
    );
};

export default AnimationContent;
