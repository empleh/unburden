import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Images from './../../images';
import SpriteSheet from 'rn-sprite-sheet';

const FireWave = (props: { width: number; runAnimation: boolean; animationComplete: () => void }) => {
    const spriteSheet = useRef();

    useEffect(() => {
        if (props.runAnimation) {
            runAnimation();
        }
    }, [props.runAnimation]);

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
