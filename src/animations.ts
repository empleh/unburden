import Constants from "expo-constants";
import { StyleVariables } from './style_variables';

export class Animations {
    static animationStepTime: number = 2500;

    static sleep = (time: number) => {
        return new Promise(resolve => setTimeout(resolve, time));
    };

    static envelopeOntoScreen = (height: number) => {
        return {
            from: {
                translateX: 0,
                translateY: height / 2,
            },
            to: {
                translateX: 0,
                translateY: 0,
            },
        };
    };

    static noteIntoEnvelope = (height: number) => {
        return {
            from: {
                translateX: 0,
                translateY: 0,
            },
            to: {
                translateX: 0,
                translateY: height * 0.58,
            },
        };
    };

    static drop = (windowHeight: number) => {
        return {
            from: {
                translateX: 0,
                translateY: 0,
            },
            to: {
                translateX: 0,
                translateY: windowHeight / 2,
            },
        };
    };

    static slideIn = () => {
        return {
            from: {
                translateX: 1000,
                translateY: 0,
            },
            to: {
                translateX: 0,
                translateY: 0,
            },
        };
    };

    static grow = (height: number) => {
        return {
            from: Animations.buildGrowStep(0, height),
            to: Animations.buildGrowStep(10, height),
        };
    };

    private static buildGrowStep = (i: number, height: number) => {
        const translateY = (-1 * height - StyleVariables.space.large * 2) / (2 + i);

        return {
            translateX: 0,
            translateY,
            scaleY: 0.1 * i,
            scaleX: 1,
        };
    };

    static shredderOntoScreen(height: number) {
        const footerHeight = Constants.platform.ios && Constants.statusBarHeight > 20 ? 50 : 80;

        return {
            from: {
                translateX: 0,
                translateY: height / 2 + footerHeight,
            },
            to: {
                translateX: 0,
                translateY: 0,
            },
        };
    }

    static rotateEnvelope(height: number, width: number) {
        const xOffset = Constants.platform.ios && Constants.statusBarHeight > 20 ? 160 : 60;
        const yOffset = 24;

        return {
            0: {
                rotate: '0deg',
                translateY: 0,
                translateX: 0,
                scaleY: 1,
                scaleX: 1,
            },
            0.8: {
                rotate: '-90deg',
                translateY: -1 * (width / 2),
                translateX: -1 * (width / 3),
                scaleY: 1,
                scaleX: 1,
            },
            1: {
                rotate: '-90deg',
                translateY: -1 * (width / 2) + yOffset,
                translateX: -1 * (width / 3) - xOffset,
                scaleY: 0.85,
                scaleX: 0.9,
            },
        };
    }
}
