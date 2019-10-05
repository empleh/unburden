import { StyleVariables } from './style_variables';

export class Animations {
    static mainAnimationTime = 6000;
    static secondaryAnimationTime = 500;

    static drop = (windowHeight: number) => {
        return {
            0: {
                translateX: 0,
                translateY: 0,
            },
            1: {
                translateX: 0,
                translateY: windowHeight / 2,
            },
        };
    };

    static slideIn = () => {
        return {
            0: {
                translateX: 100,
                translateY: 0,
            },
            1: {
                translateX: 0,
                translateY: 0,
            },
        };
    };

    private static buildGrowStep = (i: number, height: number) => {
        console.log(height);
        return {
            translateX: 0,
            translateY: (-1 * height) / (2 + i),
            scaleY: 0.2 * i,
            scaleX: 1,
        };
    };
    static grow = (height: number) => {
        return {
            0: Animations.buildGrowStep(0, height),
            0.1: Animations.buildGrowStep(1, height),
            0.2: Animations.buildGrowStep(2, height),
            0.3: Animations.buildGrowStep(3, height),
            0.4: Animations.buildGrowStep(4, height),
            1: {
                translateX: 0,
                translateY: height * 2,
            },
        };
    };
}
