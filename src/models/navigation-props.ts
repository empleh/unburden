import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';

export interface INavigationProps {
  navigation?: NavigationScreenProp<NavigationStateRoute<unknown>>;
}