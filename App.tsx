import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import AppNavigator from './src/app-navigator.component';
import * as Font from 'expo-font';

export default function App() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const loadAssets = async () => {
            await Asset.fromModule(require('./assets/paper.png')).downloadAsync();
            await Font.loadAsync({
                'title-font': require('./assets/fonts/Grestal.ttf'),
            });

            setLoaded(true);
        };

        loadAssets();
    }, []);

    if (loaded === false) {
        return <AppLoading />;
    }

    return <AppNavigator />;
}
