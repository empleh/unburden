import React from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native';

const ReleaseButton = (props: { unburdenMessage: () => void; animating: boolean }) => {
    const window = Dimensions.get('window');

    if (props.animating) {
        return null;
    }

    const buttonTop = window.height / 2 - 60;

    return (
        <View style={[styles.actions, { top: buttonTop }]}>
            <View style={styles.floatingButton}>
                <Button onPress={props.unburdenMessage} title={'Release It'} color={'white'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 10,
    },
    floatingButton: {
        width: 200,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#669277',
        justifyContent: 'center',
    },
});

export default ReleaseButton;
