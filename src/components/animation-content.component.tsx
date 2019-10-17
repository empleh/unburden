import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import FireWave from './animations/fire-wave.component';

const AnimationContent = () => {
    const [runAnimation, setRunAnimation] = useState(false);

    const startAnimation = () => {
        setRunAnimation(true);
    };

    const animationComplete = () => {
        setRunAnimation(false);
    };

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <FireWave width={300} runAnimation={runAnimation} animationComplete={animationComplete} />
            <TouchableWithoutFeedback onPress={startAnimation} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default AnimationContent;
