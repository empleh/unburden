import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { AnimationContainer } from '../contexts/animation.context';
import { INavigationProps } from '../models/navigation-props';
import Constants from 'expo-constants';
import AnimationSteps from "./animations/animation-steps.component";
import AppFooter from './app-footer.component';
import FlipButton from './buttons/flip-button.component';
import Header from './header.component';
import ReleaseButton from './buttons/release-button.component';

const ApplicationContent = ({ navigation }: INavigationProps) => {
    const paddingTop = Constants.statusBarHeight + 12;
    const safeViewStyles = { flex: 1, backgroundColor: 'white', paddingTop };

    return (
        <AnimationContainer>
            <View style={styles.container}>
                <SafeAreaView style={safeViewStyles}>
                    <Header navigation={navigation} showWhy={true} />

                    <AnimationSteps navigation={navigation} />

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
    top: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
    },
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
    },
});

export default ApplicationContent;
