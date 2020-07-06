import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Animations } from '../../animations';
import { MessageConstants } from '../../models/message-constants';
import { INavigationProps } from '../../models/navigation-props';
import { StyleVariables } from '../../style_variables';
import AnimationContent from './animation-content.component';
import AnimationWrapper, { IAnimationWrapperProps } from './animation-wrapper.component';
import MessageInput, { IMessageInputProps } from './../message-input.component';
import { IAnimationProps } from '../../models/animation.props';

const runAnimationSteps: Array<number> = [1];

const buildAnimationWrapper = (step: number): IAnimationWrapperProps => {
    return {
        animation: () => {},
        startAnimation: runAnimationSteps.includes(step),
        alwaysShowChildren: step !== 3,
    };
};

const buildInputProps = (step: number): IMessageInputProps => {
    return {
        placeholder: MessageConstants.LetGoPlaceholder,
        prompt: MessageConstants.LetGoPrompt,
        startAnimation: runAnimationSteps.includes(step),
    };
};

const AnimationSteps = (props: IAnimationProps & INavigationProps & { coverFooter: (cover: boolean) => void }) => {
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
                return (
                    <MessageInput
                        coverFooter={props.coverFooter}
                        startAnimation={true}
                        animationComplete={() => setAnimationStep(3)}
                        navigation={props.navigation}
                        placeholder={MessageConstants.LetGoPlaceholder}
                        prompt={MessageConstants.LetGoPrompt}
                    />
                );
            case 3:
                props.coverFooter(false);
                return <AnimationContent startAnimation={true} animationComplete={() => setAnimationStep(4)} />;
            case 4:
                return (
                    <AnimationWrapper animation={Animations.slideIn} startAnimation={true} animationComplete={props.animationComplete}>
                        <MessageInput
                            startAnimation={false}
                            blockKeyboard={true}
                            navigation={props.navigation}
                            placeholder={MessageConstants.LetGoPlaceholder}
                            prompt={MessageConstants.LetGoPrompt}
                        />
                    </AnimationWrapper>
                );
            default:
                return (
                    <AnimationWrapper animation={() => {}} startAnimation={false} alwaysShowChildren={true}>
                        <MessageInput
                            startAnimation={false}
                            navigation={props.navigation}
                            blockKeyboard={false}
                            placeholder={MessageConstants.LetGoPlaceholder}
                            prompt={MessageConstants.LetGoPrompt}
                        />
                    </AnimationWrapper>
                );
        }
    };

    const wrapperProps: IAnimationWrapperProps = buildAnimationWrapper(animationStep);
    const inputProps: IMessageInputProps = buildInputProps(animationStep);

    console.log(wrapperProps);
    console.log(inputProps);

    return (
        <View style={[styles.top]}>
            <View style={styles.wrapper}>
                <AnimationWrapper {...wrapperProps}>
                    <MessageInput {...inputProps} navigation={props.navigation} />
                </AnimationWrapper>
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
