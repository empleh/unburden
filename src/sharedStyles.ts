import { StyleSheet } from 'react-native';
import { StyleVariables } from './style_variables';

const sharedStyles = StyleSheet.create({
    elevationLarge: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16.0,
        borderRadius: 16,
        marginVertical: 5,
        marginHorizontal: 2,
        borderWidth: 0,

        elevation: 24,
    },
    paperBackground: {
        width: '98%',
        height: '98%',
        backgroundColor: 'transparent',
    },
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
    },
    clearWrapper: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    alignTextTop: { textAlignVertical: 'top' },
    sidePadding: { padding: StyleVariables.space.large },
    seeMe: { width: '100%', height: '100%', backgroundColor: 'red' },
    envelope: {
        width: '98%',
        height: '98%',
        backgroundColor: 'transparent',
    },
    layer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        height: '100%',
    },
    image: {
        backgroundColor: 'transparent',
    },
    staticEnvelope: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        height: '100%',
        borderColor: 'white',
    },
});

export default sharedStyles;
