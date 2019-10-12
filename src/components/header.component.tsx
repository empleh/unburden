import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { INavigationProps } from '../models/navigation-props';

export interface IHeaderProps extends INavigationProps {
    showBack?: boolean;
    showWhy?: boolean;
}
const Header = (props: IHeaderProps) => {
    return (
        <View style={styles.header}>
            <View style={styles.side}>{props.showBack && <Button title={'< Back'} onPress={() => props.navigation.navigate('Home')} />}</View>
            <View style={styles.center}>
                <Text style={styles.title}>Unburden</Text>
            </View>
            <View style={styles.side}>{props.showWhy && <Button title={'Why? >'} onPress={() => props.navigation.navigate('Why')} />}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: 'row',
    },
    side: {
        width: 100,
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
    },
});

export default Header;
