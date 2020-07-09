import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useAnimationFunctions, useAnimationState } from '../../contexts/animation.context';
import { INavigationProps } from '../../models/navigation-props';
import { StyleVariables } from '../../style_variables';
import AnimationContent from './animation-content.component';
import AnimationWrapper from './animation-wrapper.component';
import MessageInput from './../message-input.component';

const AnimationSteps = ({ navigation }: INavigationProps) => {
    const { animatingReset } = useAnimationState();
    const { completeReset } = useAnimationFunctions();

    /*    useEffect(() => {
        if (animating) {
            setAnimationStep(1);
        } else {
            setAnimationStep(0);
        }
    }, [animating]);*/

    /* const renderAnimationSteps = () => {
        switch (animationStep) {
            case 1:
                return (
                    <MessageInput
                        //coverFooter={props.coverFooter}
                        //startAnimation={true}
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
    };*/

    return (
        <View style={styles.top}>
            <View style={styles.wrapper}>
                {!animatingReset && (
                    <AnimationWrapper>
                        <MessageInput navigation={navigation} />
                    </AnimationWrapper>
                )}
                {animatingReset && <AnimationContent animating={true} animationComplete={completeReset} />}
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
