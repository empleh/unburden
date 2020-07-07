import React from 'react';
import { View } from 'react-native';
import { useAnimationState } from '../contexts/animation.context';
import Constants from 'expo-constants';
import { StyleVariables } from '../style_variables';

const AppFooter = () => {
    const { coverFooter } = useAnimationState();

    const footerHeight = Constants.platform.ios && Constants.statusBarHeight > 20 ? StyleVariables.space.large * 2 : 0;

    const footerStyle = { backgroundColor: coverFooter ? 'white' : 'transparent', height: footerHeight, width: '100%' };

    return <View style={footerStyle} />;
};

export default AppFooter;
