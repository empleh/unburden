import { StyleVariables } from './style_variables';

export class Animations {
    static animationStepTime: number = 3000;

    static sleep = (time: number) => {
        return new Promise(resolve => setTimeout(resolve, time));
    };

    static flyOffPage = (height: number) => {
        return {
            from: {
                translateX: 0,
                translateY: 0,
            },
            to: {
                translateX: 0,
                translateY: height * .55,
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

    static raiseEnvelope(height: number) {
        const translateYEnd = -1 * (height - StyleVariables.space.large) * .52;

        return {
            from: {
                translateX: 0,
                translateY: 0,
            },
            to: {
                translateX: 0,
                translateY: translateYEnd,
            },
        };
    }
}
