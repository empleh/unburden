import React from 'react';
import { StyleSheet, Dimensions, Button, Text, View } from 'react-native';

const ReleaseButton = (props: { unburdenMessage: () => void }) => {
    const styles = StyleSheet.create({
        floatingButton: {
            width: 200,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#669277',
            justifyContent: 'center'
        },
    });

    return (
        <View style={styles.floatingButton}>
            <Button onPress={props.unburdenMessage} title={'Release It'} color={'white'} />
        </View>
    );
};

export default ReleaseButton;
