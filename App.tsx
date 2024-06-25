/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavigationApp from './app/navigation';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <NavigationApp />;
}

export default App;
