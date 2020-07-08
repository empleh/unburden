import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { AnimationContainer } from '../contexts/animation.context';
import { INavigationProps } from '../models/navigation-props';
import Constants from 'expo-constants';
import AnimationWrapper from './animations/animation-wrapper.component';
import AppFooter from './app-footer.component';
import FlipButton from './buttons/flip-button.component';
import Header from './header.component';
import ReleaseButton from './buttons/release-button.component';
import MessageInput from './message-input.component';

const ApplicationContent = (props: INavigationProps) => {
    const paddingTop = Constants.statusBarHeight + 12;
    const safeViewStyles = { flex: 1, backgroundColor: 'white', paddingTop };

    return (
        <AnimationContainer>
            <View style={styles.container}>
                <SafeAreaView style={safeViewStyles}>
                    <Header navigation={props.navigation} showWhy={true} />

                    <View style={styles.top}>
                        <View style={styles.wrapper}>
                            <AnimationWrapper>
                                <MessageInput navigation={props.navigation} />
                            </AnimationWrapper>
                        </View>
                    </View>

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
