import React from 'react';
import { Button, View } from 'react-native';

const Actions = (props: { unburdenMessage: () => void }) => {
    return (
        <View style={{ margin: 12, padding: 24, backgroundColor: 'yellow' }}>
            <Button onPress={props.unburdenMessage} title={'Unburden'} />
        </View>
    );
};

export default Actions;
