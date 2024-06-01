import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, MOVIE_DETAIL_SCREEN} from '../../utils/screenNames';
import HomeContainer from '../../screens/Home/Home.container';
import MovieDetailsContainer from '../../screens/MovieDetails/MovieDetails.container';

export type MovieStackParamList = {
  [HOME]: undefined;
  [MOVIE_DETAIL_SCREEN]: {
    name: string;
    id: string;
  };
};

const MoviesStack = createNativeStackNavigator<MovieStackParamList>();
/**
 * Returns the stack navigation and all the associated screens
 * @returns JSX.Element
 */
const MoviesStackNavigation = (): JSX.Element => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name={HOME}
        component={HomeContainer}
        options={{title: 'Home'}}
      />
      <MoviesStack.Screen
        options={({route}) => ({title: route.params.name})}
        name={MOVIE_DETAIL_SCREEN}
        component={MovieDetailsContainer}
      />
    </MoviesStack.Navigator>
  );
};

export default MoviesStackNavigation;
