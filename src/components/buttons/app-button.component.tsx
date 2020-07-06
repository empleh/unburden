import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import sharedStyles from '../../sharedStyles';

const AppButton = ({ onPress, style, children }: { onPress: () => void; style: {}; children: JSX.Element }) => {
    return (
        <View style={[styles.box, sharedStyles.elevationLarge, style]}>
            <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
                {children}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        borderRadius: 32,
        backgroundColor: 'white',
        padding: 0,
        flex: 1,
    },
});

export default AppButton;
