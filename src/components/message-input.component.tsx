import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../animations';
import { INavigationProps } from '../models/navigation-props';
import sharedStyles from '../sharedStyles';
import EnvelopeBackground from './envelope/envelope-background.compnent';
import EnvelopeWrapper from './envelope/envelope-wrapper.compnent';
import { IAnimationProps } from '../models/animation.props';
import MessageInputContent from './message-input-content.component';

export interface IMessageInputProps extends IAnimationProps, INavigationProps {
    blockKeyboard?: boolean;
    placeholder: string;
    prompt: string;
    coverFooter?: (cover: boolean) => void;
}

const MessageInput = ({ placeholder, prompt, blockKeyboard, coverFooter, startAnimation, animationComplete, navigation }: IMessageInputProps) => {
    const window = Dimensions.get('window');
    const [animateEnvelope, setAnimateEnvelope] = useState(false);
    const animationRef = useRef();
    const foregroundRef = useRef();
    const backgroundRef = useRef();

    useEffect(() => {
        if (startAnimation) {
            runAnimation();
        }
    }, [startAnimation]);

    const runAnimation = async () => {
        // @ts-ignore
        foregroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);
        // @ts-ignore
        backgroundRef.current.animate(Animations.envelopeOntoScreen(window.height), Animations.animationStepTime);

        await Animations.sleep(Animations.animationStepTime);

        coverFooter(true);

        // @ts-ignore
        await animationRef.current.animate(Animations.noteIntoEnvelope(window.height), Animations.animationStepTime);

        setAnimateEnvelope(true);
    };

    return (
        <View style={[sharedStyles.wrapper, sharedStyles.sidePadding]}>
            <Animatable.View ref={animationRef} useNativeDriver style={[sharedStyles.wrapper, { zIndex: 10 }]}>
                <MessageInputContent blockKeyboard={blockKeyboard} navigation={navigation} placeholder={placeholder} prompt={prompt} />
            </Animatable.View>
            <Animatable.View ref={backgroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 1 }]}>
                <EnvelopeBackground startAnimation={animateEnvelope} showEnvelope={startAnimation} animationComplete={animationComplete} />
            </Animatable.View>
            <Animatable.View ref={foregroundRef} useNativeDriver style={[sharedStyles.staticEnvelope, { zIndex: 20 }]}>
                <EnvelopeWrapper startAnimation={animateEnvelope} showEnvelope={startAnimation} animationComplete={() => {}} />
            </Animatable.View>
        </View>
    );
};

export default MessageInput;
