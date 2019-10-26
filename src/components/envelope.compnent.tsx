import React from 'react';
import { Dimensions, View } from 'react-native';
import sharedStyles from '../sharedStyles';
import { StyleVariables } from '../style_variables';
import Svg, { Polygon } from 'react-native-svg';

const Envelope = (props: { showClosed: boolean }) => {
    const window = Dimensions.get('window');
    const envelopeWidth = window.width - (StyleVariables.space.standard * 2 + (StyleVariables.space.large + StyleVariables.space.small));
    const containerHeight = window.height * 0.36;
    const envelopeHeight = containerHeight - StyleVariables.space.large * 3;

    const renderTopTriangle = () => {
        if (!props.showClosed) {
            return null;
        }

        const firstXY = `${StyleVariables.space.small}, 0`;
        const secondXY = `${envelopeWidth}, 0`;
        const thirdXY = `${envelopeWidth / 2}, ${envelopeHeight - 60 / 2}`;

        const points = `${firstXY} ${secondXY} ${thirdXY}`;

        return <Polygon points={points} fill="white" stroke="gray" strokeWidth={StyleVariables.space.small} />;
    };

    const renderBottomTriangle = () => {
        const firstXY = `${envelopeWidth / 2}, ${envelopeHeight / 2}`;
        const secondXY = `${StyleVariables.space.small}, ${envelopeHeight + 2}`;
        const thirdXY = `${envelopeWidth}, ${envelopeHeight + 2}`;

        const points = `${firstXY} ${secondXY} ${thirdXY}`;

        return <Polygon points={points} fill="white" stroke="gray" strokeWidth={StyleVariables.space.small} />;
    };

    const renderRightTriangle = () => {
        const firstXY = `${StyleVariables.space.small / 2}, ${StyleVariables.space.small}`;
        const secondXY = `${envelopeWidth / 2}, ${envelopeHeight / 2}`;
        const thirdXY = `${StyleVariables.space.small / 2}, ${envelopeHeight}`;

        const points = `${firstXY} ${secondXY} ${thirdXY}`;

        return <Polygon points={points} fill="white" stroke="gray" strokeWidth={StyleVariables.space.small} />;
    };

    const renderLeftTriangle = () => {
        const firstXY = `${envelopeWidth + StyleVariables.space.small / 2}, ${StyleVariables.space.small}`;
        const secondXY = `${envelopeWidth / 2}, ${envelopeHeight / 2}`;
        const thirdXY = `${envelopeWidth + StyleVariables.space.small / 2}, ${envelopeHeight}`;

        const points = `${firstXY} ${secondXY} ${thirdXY}`;

        return <Polygon points={points} fill="white" stroke="gray" strokeWidth={StyleVariables.space.small} />;
    };

    return (
        <View style={[sharedStyles.clearWrapper]}>
            <Svg height="100%" width="100%">
                {renderBottomTriangle()}
                {renderLeftTriangle()}
                {renderRightTriangle()}
                {renderTopTriangle()}
            </Svg>
        </View>
    );
};

export default Envelope;
