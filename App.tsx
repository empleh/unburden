import React, { useEffect } from 'react';
import { Asset } from 'expo-asset';
import ApplicationContent from './src/components/app-content.component';

export default function App() {
    useEffect(() => {
        Asset.fromModule(require('./assets/paper.png')).downloadAsync();
    }, []);
    return <ApplicationContent />;
}
