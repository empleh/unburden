import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAnimationFunctions } from '../contexts/animation.context';
import NavButton from './buttons/nav-button.component';

export interface IHeaderProps {
    showBack?: boolean;
    showWhy?: boolean;
}
const Header = ({ showBack, showWhy }: IHeaderProps) => {
    const { navigate } = useAnimationFunctions();

    const navBack = () => {
        navigate('Home');
    };
    const navWhy = () => {
        navigate('Why');
    };
    return (
        <View style={styles.header}>
            <View style={styles.side}>
                <NavButton text="back" onPress={navBack} hide={!showBack} />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>Unburden</Text>
            </View>

            <View style={[styles.side, { alignItems: 'flex-end' }]}>
                <NavButton text="why?" onPress={navWhy} hide={!showWhy} style={{ marginRight: 12 }} />
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
        paddingLeft: 20,
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
