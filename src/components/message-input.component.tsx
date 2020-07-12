import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import { useAnimationFunctions, useAnimationState } from '../contexts/animation.context';
import sharedStyles from '../sharedStyles';
import EnvelopeBackground from './envelope/envelope-background.compnent';
import EnvelopeWrapper from './envelope/envelope-wrapper.compnent';
import MessageInputContent from './message-input-content.component';

const MessageInput = () => {
    const window = Dimensions.get('window');
    const [animateEnvelope, setAnimateEnvelope] = useState(false);
    const animationRef = useRef();
    const foregroundRef = useRef();
    const backgroundRef = useRef();

    const { animatingMessage } = useAnimationState();
    const { completeMessage, setCoverFooter } = useAnimationFunctions();

    const runAnimation = useCallback(async () => {
        // @ts-ignore
        foregroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);
        // @ts-ignore
        backgroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);

        await Animations.sleep(Animations.animationStepTime);

        setCoverFooter(true);

        // @ts-ignore
        await animationRef.current.animate(Animations.noteIntoEnvelope(window.height), Animations.animationStepTime);

        setAnimateEnvelope(true);
    }, [setCoverFooter, setAnimateEnvelope, window.height]);

    useEffect(() => {
        if (animatingMessage) {
            runAnimation();
        }
    }, [animatingMessage, runAnimation]);

    return (
        <View style={[sharedStyles.wrapper, sharedStyles.sidePadding]}>
            <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.wrapper, { zIndex: 10 }]}>
                <MessageInputContent />
            </Animatable.View>
            <Animatable.View ref={backgroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 1 }]}>
                <EnvelopeBackground animating={animateEnvelope} showEnvelope={animatingMessage} animationComplete={completeMessage} />
            </Animatable.View>
            <Animatable.View ref={foregroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 20 }]}>
                <EnvelopeWrapper animating={animateEnvelope} showEnvelope={animatingMessage} animationComplete={console.log} />
            </Animatable.View>
        </View>
    );
};

export default MessageInput;
