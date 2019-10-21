import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Animations } from '../animations';
import { INavigationProps } from '../models/navigation-props';
import { StyleVariables } from '../style_variables';
import AnimationContent from './animations/animation-content.component';
import AnimationWrapper from './animations/animation-wrapper.component';
import Envelope from './envelope-wrapper.compnent';
import MessageInput from './message-input.component';
import { IAnimationProps } from '../models/animation.props';

const MessageEntry = (props: IAnimationProps & INavigationProps) => {
    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        if (props.startAnimation) {
            setAnimationStep(1);
        } else {
            setAnimationStep(0);
        }
    }, [props.startAnimation]);

    const renderAnimationSteps = () => {
        switch (animationStep) {
            case 1:
                return <MessageInput startAnimation={true} animationComplete={() => setAnimationStep(2)} />;
            case 2:
                return <Envelope startAnimation={true} animationComplete={() => setAnimationStep(3)} />;
            case 3:
                return <AnimationContent startAnimation={true} animationComplete={props.animationComplete} />;
            case 4:
                return (
                    <AnimationWrapper animation={Animations.slideIn} animationComplete={props.animationComplete}>
                        <MessageInput startAnimation={false} />
                    </AnimationWrapper>
                );
            default:
                return <MessageInput startAnimation={false} />;
        }
    };

    return (
        <View style={[styles.top]}>
            <View style={styles.wrapper}>{renderAnimationSteps()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        height: '100%',
        display: 'flex',
        paddingTop: StyleVariables.space.large,
        paddingLeft: StyleVariables.space.large,
        paddingRight: StyleVariables.space.large,
    },
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
    },
    inputWrapper: {
        paddingTop: StyleVariables.space.large,
        paddingBottom: StyleVariables.space.large,
        paddingLeft: StyleVariables.space.large,
        paddingRight: StyleVariables.space.large,
        zIndex: 1,
    },
    input: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        fontSize: 16,
    },
});

export default MessageEntry;
