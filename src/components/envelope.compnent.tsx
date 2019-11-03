import React from 'react';
import { Dimensions, ImageBackground, TextInput, View } from "react-native";
import Images from "../images";
import sharedStyles from '../sharedStyles';
import { StyleVariables } from '../style_variables';
import Svg, { Polygon } from 'react-native-svg';

const Envelope = (props: { showClosed: boolean }) => {
    const window = Dimensions.get('window');
    const envelopeWidth = window.width - (StyleVariables.space.standard * 2 + (StyleVariables.space.large + StyleVariables.space.small));
    const containerHeight = window.height * 0.36;
    const envelopeHeight = containerHeight - StyleVariables.space.large * 3;

    return (
        <View style={[sharedStyles.clearWrapper]}>
            <ImageBackground
              source={Images.closedEnvelope}
              style={[sharedStyles.envelope, sharedStyles.elevationLarge]}
              resizeMode="stretch"
            >
            </ImageBackground>
        </View>
    );
};

export default Envelope;
