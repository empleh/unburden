import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Keyboard, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const useKeyboardEvents = (): { keyboardOpen: boolean; screenHeight: number } => {
  const windowHeightCalc = (keyboardHeight: number): number => {
    const windowHeight = Dimensions.get('window').height - (70 + Constants.statusBarHeight);

    return windowHeight - keyboardHeight;
  };

  const [keyboardOpen, setKeyboardOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [screenHeight, setScreenHeight]: [number, Dispatch<SetStateAction<number>>] = useState(windowHeightCalc(0));

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidShow', (e: { endCoordinates: { height: number } }) => {
      setKeyboardOpen(true);

      setScreenHeight(windowHeightCalc(e.endCoordinates.height));
    });

    const cleanup = (): void => {
      listener.remove();
    };
    return cleanup;
  });
  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
      setScreenHeight(windowHeightCalc(0));
    });

    const cleanup = (): void => {
      listener.remove();
    };
    return cleanup;
  });

  return { keyboardOpen, screenHeight };
};
export default useKeyboardEvents;
