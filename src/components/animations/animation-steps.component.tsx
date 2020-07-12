import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAnimationFunctions, useAnimationState } from '../../contexts/animation.context';
import { StyleVariables } from '../../style_variables';
import AnimationContent from './animation-content.component';
import AnimationWrapper from './animation-wrapper.component';
import MessageInput from './../message-input.component';

const AnimationSteps = () => {
    const { animatingAction } = useAnimationState();
    const { completeAction } = useAnimationFunctions();

    return (
        <View style={styles.top}>
            <View style={styles.wrapper}>
                {!animatingAction && (
                    <AnimationWrapper>
                        <MessageInput />
                    </AnimationWrapper>
                )}
                {animatingAction && <AnimationContent animationComplete={completeAction} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
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

export default AnimationSteps;
