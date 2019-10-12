import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { INavigationProps } from "../models/navigation-props";
import Header from "./header.component";

const WhyContent = (props: INavigationProps) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'navy' }} />

            <Header navigation={props.navigation} showBack={true} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'navy',
    },
});

export default WhyContent;
