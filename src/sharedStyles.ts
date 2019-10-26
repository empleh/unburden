import { StyleSheet } from 'react-native';

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
        width: '100%',
        height: '100%',
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
});

export default sharedStyles;
