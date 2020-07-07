import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { AnimationContainer } from '../contexts/animation.context';
import { INavigationProps } from '../models/navigation-props';
import Constants from 'expo-constants';
import AppFooter from './app-footer.component';
import FlipButton from './buttons/flip-button.component';
import Header from './header.component';
import AnimationSteps from './animations/animation-steps.component';
import ReleaseButton from './buttons/release-button.component';

const ApplicationContent = (props: INavigationProps) => {
    const paddingTop = Constants.statusBarHeight + 12;

    return (
        <AnimationContainer>
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop }}>
                    <Header navigation={props.navigation} showWhy={true} />

                    <AnimationSteps navigation={props.navigation} />

                    <FlipButton />
                    <ReleaseButton />
                </SafeAreaView>

                <AppFooter />
            </View>
        </AnimationContainer>
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
