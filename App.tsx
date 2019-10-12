import React, { useEffect } from 'react';
import { Asset } from 'expo-asset';
import AppNavigator from './src/app-navigator.component';

export default function App() {
    useEffect(() => {
        Asset.fromModule(require('./assets/paper.png')).downloadAsync();
    }, []);

    return <AppNavigator />;
}
