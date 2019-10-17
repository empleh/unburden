import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
import AnimationContent from "./components/animation-content.component";
import ApplicationContent from './components/app-content.component';
import WhyContent from './components/why-content.component';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: AnimationContent,
        },
        Why: {
            screen: WhyContent,
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null,
        },
        transitionConfig: () => fromRight(1000),
    }
);

const container = createAppContainer(AppNavigator);

export default container;
