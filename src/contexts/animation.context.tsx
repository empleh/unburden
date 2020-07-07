import React, { createContext, memo, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { Animations } from '../animations';
import { MessageConstants } from '../models/message-constants';

export interface IAnimationState {
    alwaysShowChildren: boolean;
    animateWrapper: boolean;
    animateMessage: boolean;
    coverFooter: boolean;
    isAnimating: boolean;
    messagePlaceholder: string;
    messagePrompt: string;
    step: number;
}

export interface IAnimationFunctions {
    animationComplete: () => void;
    animationStart: () => void;
    flipMode: () => void;
    getCurrentAnimation: () => {};
    setCoverFooter: (coverFooter: boolean) => void;
    setStep: (step: number) => void;
}

export const AnimationStateContext = createContext({} as IAnimationState);
export const AnimationFunctionsContext = createContext({} as IAnimationFunctions);

export const AnimationFunctionsProvider = memo(({ children, ...rest }: PropsWithChildren<IAnimationFunctions>) => {
    return <AnimationFunctionsContext.Provider value={rest}>{children}</AnimationFunctionsContext.Provider>;
});

export const AnimationContainer = ({ children }: PropsWithChildren<{}>) => {
    const [step, setStep] = useState(1);
    const [animateWrapper, setAnimateWrapper] = useState(false);
    const [animateMessage, setAnimateMessage] = useState(false);
    const [alwaysShowChildren, setAlwaysShowChildren] = useState(true);
    const [coverFooter, setCoverFooter] = useState(false);

    const [messagePlaceholder, setMessagePlaceholder] = useState(MessageConstants.LetGoPlaceholder);
    const [messagePrompt, setMessagePrompt] = useState(MessageConstants.LetGoPrompt);
    const [showGratitude, setShowGratitude] = useState(false);

    const state: IAnimationState = {
        alwaysShowChildren,
        animateMessage,
        animateWrapper,
        coverFooter,
        isAnimating: animateMessage || animateWrapper,
        messagePlaceholder,
        messagePrompt,
        step,
    };

    const animationStart = useCallback(() => {
        Keyboard.dismiss();
        setAnimateMessage(true);
    }, []);

    const animationComplete = useCallback(() => {
        setAnimateMessage(false);
    }, []);

    const getCurrentAnimation = useCallback(() => {
        if (step === 3) {
            return Animations.slideIn();
        }

        return () => {};
    }, [step]);

    const flipMode = useCallback(() => {
        setShowGratitude(!showGratitude);
    }, [showGratitude]);

    useEffect(() => {
        console.log('effecting');
        if (showGratitude) {
            setMessagePlaceholder(MessageConstants.GratitudePlaceholder);
            setMessagePrompt(MessageConstants.GratitudePrompt);
        } else {
            setMessagePlaceholder(MessageConstants.LetGoPlaceholder);
            setMessagePrompt(MessageConstants.LetGoPrompt);
        }
    }, [showGratitude]);

    return (
        <AnimationStateContext.Provider value={state}>
            <AnimationFunctionsProvider
                setStep={setStep}
                animationComplete={animationComplete}
                animationStart={animationStart}
                getCurrentAnimation={getCurrentAnimation}
                setCoverFooter={setCoverFooter}
                flipMode={flipMode}
            >
                {children}
            </AnimationFunctionsProvider>
        </AnimationStateContext.Provider>
    );
};

export function useAnimationFunctions() {
    return useContext(AnimationFunctionsContext);
}

export function useAnimationState() {
    return useContext(AnimationStateContext);
}
