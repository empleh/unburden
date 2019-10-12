import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {  fromRight } from "react-navigation-transitions";
import ApplicationContent from './components/app-content.component';
import WhyContent from './components/why-content.component';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: ApplicationContent,
        },
        Why: {
            screen: WhyContent,
        },
    },
    {
        defaultNavigationOptions: {
            header: null
        },
        transitionConfig: () => fromRight(1000),
    }
);

const container = createAppContainer(AppNavigator);

export default container;
