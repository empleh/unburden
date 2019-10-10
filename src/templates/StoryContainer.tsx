import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    component: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export const StorybookContainer = (story: any) => (
    <View style={styles.container}>
        <View style={styles.component}>{story()}</View>
    </View>
);
