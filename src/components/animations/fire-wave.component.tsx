import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { IAnimationProps } from '../../models/animation.props';
import Images from './../../images';
import SpriteSheet from 'rn-sprite-sheet';

const FireWave = (props: { width: number } & IAnimationProps) => {
    const spriteSheet = useRef();

    useEffect(() => {
        if (props.startAnimation) {
            runAnimation();
        }
    }, [props.startAnimation]);

    const runAnimation = () => {
        // @ts-ignore
        spriteSheet.current.play({
            type: 'go',
            fps: 16,
            resetAfterFinish: true,
            onFinish: () => {
                props.animationComplete();
            },
        });
    };

    // @ts-ignore
    const indexes = [...Array(70).keys()];

    const spriteProps = {
        ref: spriteSheet,
        source: Images.fireWave,
        columns: 14,
        rows: 5,
        width: props.width,
        animations: {
            go: indexes,
        },
    };

    return (
        <View style={{ flex: 1 }}>
            <SpriteSheet {...spriteProps} />
        </View>
    );
};

export default FireWave;
