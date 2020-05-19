import React, { useEffect, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import sharedStyles from '../../sharedStyles';
import { IAnimationProps } from '../../models/animation.props';
import SpriteSheet from 'rn-sprite-sheet';
import { SpriteSheets } from '../animations/sprite-sheets';

const EnvelopeBackground = (props: IAnimationProps & { showEnvelope: boolean }) => {
    const spriteSheet = useRef();
    const window = Dimensions.get('window');

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    useEffect(() => {
        if (props.showEnvelope && !props.startAnimation) {
            showMe();
        }
    }, [props.showEnvelope, props.startAnimation]);

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
            onFinish: () => {
                props.animationComplete();
            },
        });
    };

    if (!props.showEnvelope) {
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
