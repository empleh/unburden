import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        padding: 12,
        flexDirection: 'column',
    },
    component: {
        flex: 1,
        padding: 12,
        backgroundColor: 'white',
        border: '1px solid black',
    },
});

export const StorybookContainer = (story: any) => (
    <View style={styles.container}>
        <View style={styles.component}>{story()}</View>
    </View>
);
