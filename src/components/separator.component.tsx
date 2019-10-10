import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleVariables } from '../style_variables';

const Separator = (props: { animating: boolean }) => {
    const onColor = { backgroundColor: props.animating ? '#00ff00' : 'green' };
    return (
        <View style={styles.shredder}>
            <View style={styles.lip} />
            <View style={styles.top}>
                <View style={styles.lights}>
                    <View style={styles.offLight} />
                    <View style={[styles.onLight, onColor]} />
                </View>
                <View style={styles.grill} />
            </View>
            <View style={styles.bottom} />
        </View>
    );
};

const styles = StyleSheet.create({
    lip: {
        height: 24,
        backgroundColor: '#666',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginTop: -24,
        opacity: 0.8,
        marginLeft: 30,
        marginRight: 30,
    },
    shredder: {
        height: 100,
        display: 'flex',
        marginTop: StyleVariables.space.large,
        backgroundColor: '#aaa',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flexDirection: 'column',
    },
    top: {
        flex: 1,
        flexDirection: 'row',
    },
    bottom: {
        backgroundColor: '#666',
        height: 30,
        width: '100%',
        alignSelf: 'flex-end',
    },
    lights: {
        width: 40,
        marginLeft: 24,
        marginTop: 12,
    },
    grill: {
        flex: 1,
    },
    onLight: {
        width: 12,
        height: 12,
        backgroundColor: 'green',
        borderRadius: 12,
    },
    offLight: { width: 12, height: 12, backgroundColor: 'red', borderRadius: 12, marginBottom: 6 },
});

export default Separator;
