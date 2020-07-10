import React, { createContext, memo, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { MessageConstants } from '../models/message-constants';

export interface IAnimationState {
    animatingAction: boolean;
    animatingMessage: boolean;
    animatingReset: boolean;
    coverFooter: boolean;
    isAnimating: boolean;
    messagePlaceholder: string;
    messagePrompt: string;
}

export interface IAnimationFunctions {
    animateMessage: () => void;
    completeAction: () => void;
    completeMessage: () => void;
    completeReset: () => void;
    flipMode: () => void;
    setCoverFooter: (coverFooter: boolean) => void;
}

export const AnimationStateContext = createContext({} as IAnimationState);
export const AnimationFunctionsContext = createContext({} as IAnimationFunctions);

export const AnimationFunctionsProvider = memo(({ children, ...rest }: PropsWithChildren<IAnimationFunctions>) => {
    return <AnimationFunctionsContext.Provider value={rest}>{children}</AnimationFunctionsContext.Provider>;
});

export const AnimationContainer = ({ children }: PropsWithChildren<{}>) => {
    const [animatingAction, setAnimateAction] = useState(false);
    const [animatingMessage, setAnimateMessage] = useState(false);
    const [animatingReset, setAnimateReset] = useState(false);
    const [coverFooter, setCoverFooter] = useState(false);
    const [messagePlaceholder, setMessagePlaceholder] = useState(MessageConstants.LetGoPlaceholder);
    const [messagePrompt, setMessagePrompt] = useState(MessageConstants.LetGoPrompt);
    const [showGratitude, setShowGratitude] = useState(false);

    const state: IAnimationState = {
        animatingAction,
        animatingMessage,
        animatingReset,
        coverFooter,
        isAnimating: animatingAction || animatingMessage || animatingReset,
        messagePlaceholder,
        messagePrompt,
    };

    const animateMessage = useCallback(() => {
        Keyboard.dismiss();
        setAnimateMessage(true);
    }, []);

    const completeAction = useCallback(() => {
        setAnimateReset(true);
        setAnimateAction(false);
    }, []);

    const completeMessage = useCallback(() => {
        setAnimateAction(true);
        setAnimateMessage(false);
        setCoverFooter(false);
        flipMode();
    }, []);

    const completeReset = useCallback(() => {
        setAnimateReset(false);
    }, []);

    const flipMode = useCallback(() => {
        setShowGratitude(!showGratitude);
    }, [showGratitude]);

    useEffect(() => {
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
                animateMessage={animateMessage}
                completeAction={completeAction}
                completeMessage={completeMessage}
                completeReset={completeReset}
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
