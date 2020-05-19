import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../../animations';
import { IAnimationProps } from '../../models/animation.props';
import sharedStyles from '../../sharedStyles';
import Envelope from '../envelope/envelope.compnent';
import SpriteSheet from 'rn-sprite-sheet';
import { SpriteSheets } from './sprite-sheets';

const ShredAnimation = (props: IAnimationProps) => {
    const window = Dimensions.get('window');
    const shredderRef = useRef();
    const envelopeRef = useRef();
    const spriteSheet = useRef();

    const [animateRotateEnvelope, setAnimateRotateEnvelope] = useState(false);
    const [animateShredderShow, setAnimateShredderShow] = useState(false);

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    useEffect(() => {
        if (animateRotateEnvelope) {
            rotateEnvelope();
        }
    }, [animateRotateEnvelope]);

    useEffect(() => {
        if (animateShredderShow) {
            showShredder();
        }
    }, [animateShredderShow]);

    const runAnimation = async () => {
        setAnimateRotateEnvelope(true);
    };

    const rotateEnvelope = async () => {
        // @ts-ignore
        await envelopeRef.current.animate(Animations.rotateEnvelope(window.height, window.width), Animations.animationStepTime / 2);

        setAnimateRotateEnvelope(false);
        setAnimateShredderShow(true);
    };

    const showShredder = async () => {
        // @ts-ignore
        shredderRef.current.animate(Animations.shredderOntoScreen(window.height, window.width), Animations.animationStepTime / 2);

        // @ts-ignore
        spriteSheet.current.play({
            type: 'receive',
            fps: 100,
            resetAfterFinish: false,
            loop: false,
            onFinish: () => {},
        });

        await Animations.sleep(Animations.animationStepTime / 2);

        await shredIt();
    };

    const shredIt = async () => {
        // @ts-ignore
        await spriteSheet.current.play({
            type: 'go',
            fps: 3,
            resetAfterFinish: false,
            loop: false,
            onFinish: async () => {
                // @ts-ignore
                await shredderRef.current.fadeOut(Animations.animationStepTime / 2);

                props.animationComplete();
            },
        });
    };

    const shredSprite = {
        ...SpriteSheets.shredder,
        ref: spriteSheet,
        width: window.width,
        animations: {
            go: [11, 12, 13, 14],
            receive: [11],
        },
    };

    return (
        <View style={[sharedStyles.staticEnvelope]}>
            {animateRotateEnvelope && (
                <Animatable.View ref={envelopeRef} useNativeDriver style={[sharedStyles.staticEnvelope]}>
                    <Envelope />
                </Animatable.View>
            )}
            {animateShredderShow && (
                <Animatable.View ref={shredderRef} useNativeDriver style={[sharedStyles.staticEnvelope]}>
                    <SpriteSheet {...shredSprite} />
                </Animatable.View>
            )}
        </View>
    );
};

export default ShredAnimation;
