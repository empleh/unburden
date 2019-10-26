import { Linking } from 'expo';
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { INavigationProps } from '../models/navigation-props';
import Header from './header.component';
import NavButton from './nav-button.component';

const WhyContent = (props: INavigationProps) => {
    const url = 'https://journals.lww.com/psychosomaticmedicine/Abstract/2013/07000/Expressive_Writing_and_Wound_Healing_in_Older.10.aspx';
    const openStudy = () => {
        Linking.openURL(url);
    };

    const intro = 'Upsetting thoughts can affect your health';
    const aboutTheStudy = 'A study suggests that by writing meaningfully about your feelings can lead to healing faster';

    const message = `${intro}\n\n${aboutTheStudy}`;

    const callToAction = 'Write out your hurtful thoughts and enjoy the refreshing feeling of letting them go';
    const benefits = 'Feel better\n';
    const closingMessage = `\n\n${benefits}\n${callToAction}`;
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white', paddingTop: 40 }} />

            <Header navigation={props.navigation} showBack={true} />

            <View style={styles.message}>
                <Text>{message}</Text>

                <View style={styles.link}>
                    <NavButton text="Read the study" onPress={openStudy} />
                </View>

                <Text>{closingMessage}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    message: {
        marginTop: 24,
        padding: 24
    },
    link: {
        alignItems: 'center',
    },
});

export default WhyContent;
