import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {HOME} from '../../utils/screenNames';
import {MovieStackParamList} from '../../navigation /MoviesStack/MoviesStackNavigation';
import Home from './Home';

/**
 * Container used to separate Home logic as a wrapper to Home screen
 * @returns JSX.Element
 */
interface HomeContainerProps
  extends NativeStackScreenProps<MovieStackParamList, typeof HOME> {}
const HomeContainer: React.FC<HomeContainerProps> = (): JSX.Element => {
  return <Home />;
};

export default HomeContainer;
