import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { INavigationProps } from '../models/navigation-props';
import Constants from 'expo-constants';
import { StyleVariables } from '../style_variables';
import Header from './header.component';
import AnimationSteps from './animations/animation-steps.component';
import ReleaseButton from './buttons/release-button.component';

const ApplicationContent = (props: INavigationProps) => {
    const paddingTop = Constants.statusBarHeight + 12;
    const footerHeight = Constants.platform.ios && Constants.statusBarHeight > 20 ? StyleVariables.space.large * 2 : 0;

    const [animating, setAnimating] = useState(false);
    const [coverFooter, setCoverFooter] = useState(false);

    const startAnimation = () => {
        Keyboard.dismiss();
        setAnimating(true);
    };
    const clearComplete = () => {
        setAnimating(false);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop }}>
                <Header navigation={props.navigation} showWhy={true} />

                <AnimationSteps
                    navigation={props.navigation}
                    startAnimation={animating}
                    animationComplete={clearComplete}
                    coverFooter={setCoverFooter}
                />

                <ReleaseButton startAnimation={startAnimation} animationRunning={animating} />
            </SafeAreaView>

            <View style={{ backgroundColor: coverFooter ? 'white' : 'transparent', height: footerHeight, width: '100%' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
});

export default ApplicationContent;
