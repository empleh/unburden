import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const NavButton = (props: { text: string; onPress: () => void; hide?: boolean; style?: any }): JSX.Element => {
    if (props.hide) {
        return null;
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={[styles.navText, props.style]}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navText: {
        fontSize: 14,
        color: '#708bd7',
        padding: 6,
    },
});

export default NavButton;
