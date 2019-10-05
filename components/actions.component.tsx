import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { StyleVariables } from '../style_variables';

const Actions = (props: { unburdenMessage: () => void }) => {
    return (
        <View style={styles.actionBar}>
            <Button onPress={props.unburdenMessage} title={'Shred It'} />
        </View>
    );
};

const styles = StyleSheet.create({
    actionBar: {
        flex: 1,
        marginTop: StyleVariables.space.standard,
        padding: StyleVariables.space.large,
        backgroundColor: 'white'
    },
});

export default Actions;
