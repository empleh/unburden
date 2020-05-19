import React from 'react';
import { ImageBackground, View } from 'react-native';
import Images from '../../images';
import sharedStyles from '../../sharedStyles';

const Envelope = () => {
    return (
        <View style={[sharedStyles.staticEnvelope, { zIndex: 20 }]}>
            <ImageBackground source={Images.closedEnvelope} style={[sharedStyles.envelope]} resizeMode="stretch" />
        </View>
    );
};

export default Envelope;
