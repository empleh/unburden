export class Animations {
    static drop = (windowHeight: number) => {
        return {
            0: {
                translateX: 0,
                translateY: 0,
            },
            1: {
                translateX: 0,
                translateY: windowHeight /2,
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
}
