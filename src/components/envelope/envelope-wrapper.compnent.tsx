import React, { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { IEnvelopeProps } from "../../models/envelope-props";
import sharedStyles from '../../sharedStyles';
import { StyleVariables } from '../../style_variables';
import SpriteSheet from 'rn-sprite-sheet';
import { SpriteSheets } from '../animations/sprite-sheets';

const EnvelopeWrapper = ({ showEnvelope, animating, animationComplete }: IEnvelopeProps) => {
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

    const front = {
        ...SpriteSheets.envelope,
        ref: spriteSheet,
        width: window.width,
        animations: {
            go: [1, 2, 3],
            receive: [1],
        },
    };

    return (
        <View style={[sharedStyles.staticEnvelope, { zIndex: 20 }]}>
            <SpriteSheet {...front} />
            <View style={styles.bottomCover} />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomCover: {
        position: 'absolute',
        bottom: -50,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: StyleVariables.space.large * 4 + StyleVariables.space.small * 2,
        zIndex: -1,
    },
});

export default EnvelopeWrapper;
