import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import AppNavigator from './src/app-navigator.component';
import * as Font from 'expo-font';
import Images from "./src/images";

export default function App() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const loadAssets = async () => {
            Object.keys(Images).forEach(async i => await Asset.fromModule(Images[i]).downloadAsync());


/*            await Asset.fromModule(Images).downloadAsync();
            await Asset.fromModule(require('./assets/paper.png')).downloadAsync();
            await Asset.fromModule(require('./assets/img/FireWave-1.png')).downloadAsync();*/
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
