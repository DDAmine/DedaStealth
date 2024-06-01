import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MoviesStackNavigation from './MoviesStack/MoviesStackNavigation';

/**
 * Returns the navigation container that englobe App navigation
 * @returns JSX.Element
 */

function Navigation(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MoviesStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default Navigation;
