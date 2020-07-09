import React, { useEffect, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import { IEnvelopeProps } from '../../models/envelope-props';
import sharedStyles from '../../sharedStyles';
import SpriteSheet from 'rn-sprite-sheet';
import { SpriteSheets } from '../animations/sprite-sheets';

const EnvelopeBackground = ({ showEnvelope, animating, animationComplete }: IEnvelopeProps) => {
    const spriteSheet = useRef();
    const window = Dimensions.get('window');

    useEffect(() => {
        if (animating) {
            runAnimation();
        }
    }, [animating]);

    useEffect(() => {
        if (showEnvelope && !animating) {
            showMe();
        }
    }, [showEnvelope, animating]);

    const showMe = () => {
        // @ts-ignore
        spriteSheet.current.play({
            type: 'receive',
            fps: 1,
            resetAfterFinish: false,
            loop: false,
        });
    };

    const runAnimation = async () => {
        // @ts-ignore
        spriteSheet.current.play({
            type: 'go',
            fps: 2,
            resetAfterFinish: false,
            loop: false,
            onFinish: animationComplete,
        });
    };

    if (!showEnvelope) {
        return null;
    }

    const background = {
        ...SpriteSheets.envelope,
        ref: spriteSheet,
        width: window.width,
        animations: {
            go: [6, 7, 3],
            receive: [6],
        },
    };

    return (
        <View style={[sharedStyles.staticEnvelope, { zIndex: 1 }]}>
            <SpriteSheet {...background} />
        </View>
    );
};

export default EnvelopeBackground;
