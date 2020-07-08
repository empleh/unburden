import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import { useAnimationFunctions, useAnimationState } from '../contexts/animation.context';
import { INavigationProps } from '../models/navigation-props';
import sharedStyles from '../sharedStyles';
import EnvelopeBackground from './envelope/envelope-background.compnent';
import EnvelopeWrapper from './envelope/envelope-wrapper.compnent';
import MessageInputContent from './message-input-content.component';

const MessageInput = ({ navigation }: INavigationProps) => {
    const window = Dimensions.get('window');
    const [animateEnvelope, setAnimateEnvelope] = useState(false);
    const animationRef = useRef();
    const foregroundRef = useRef();
    const backgroundRef = useRef();

    const { isAnimating, animatingMessage, messagePlaceholder, messagePrompt } = useAnimationState();
    const { completeMessage, setCoverFooter } = useAnimationFunctions();

    useEffect(() => {
        if (animatingMessage) {
            runAnimation();
        }
    }, [animatingMessage]);

    const runAnimation = async () => {
        // @ts-ignore
        foregroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);
        // @ts-ignore
        backgroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);

        await Animations.sleep(Animations.animationStepTime);

        setCoverFooter(true);

        // @ts-ignore
        await animationRef.current.animate(Animations.noteIntoEnvelope(window.height), Animations.animationStepTime);

        setAnimateEnvelope(true);
    };

    return (
        <View style={[sharedStyles.wrapper, sharedStyles.sidePadding]}>
            <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.wrapper, { zIndex: 10 }]}>
                <MessageInputContent blockKeyboard={isAnimating} navigation={navigation} placeholder={messagePlaceholder} prompt={messagePrompt} />
            </Animatable.View>
            <Animatable.View ref={backgroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 1 }]}>
                <EnvelopeBackground startAnimation={animateEnvelope} showEnvelope={animatingMessage} animationComplete={completeMessage} />
            </Animatable.View>
            <Animatable.View ref={foregroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 20 }]}>
                <EnvelopeWrapper startAnimation={animateEnvelope} showEnvelope={animatingMessage} animationComplete={() => {}} />
            </Animatable.View>
        </View>
    );
};

export default MessageInput;
