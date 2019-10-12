import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { INavigationProps } from '../models/navigation-props';
import NavButton from './nav-button.component';

export interface IHeaderProps extends INavigationProps {
    showBack?: boolean;
    showWhy?: boolean;
}
const Header = (props: IHeaderProps) => {
    const navBack = () => {
        props.navigation.navigate('Home');
    };
    const navWhy = () => {
        props.navigation.navigate('Why');
    };
    return (
        <View style={styles.header}>
            <View style={styles.side}>
                <NavButton text="back" onPress={navBack} hide={!props.showBack} />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>Unburden</Text>
            </View>

            <View style={[styles.side, { alignItems: 'flex-end' }]}>
                <NavButton text="why?" onPress={navWhy} hide={!props.showWhy} style={{ marginRight: 12 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: 'row',
    },
    side: {
        width: 80,
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'title-font',
        padding: 4,
        color: '#777',
    },
});

export default Header;
