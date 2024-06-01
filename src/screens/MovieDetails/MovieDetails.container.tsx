import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {MovieStackParamList} from '../../navigation /MoviesStack/MoviesStackNavigation';
import {MOVIE_DETAIL_SCREEN} from '../../utils/screenNames';
import MovieDetails from './MovieDetails';

/**
 * Container used to separate Movie details logic as a wrapper to Movie details screen
 * @returns JSX.Element
 */

interface MovieDetailsContainerProps
  extends NativeStackScreenProps<
    MovieStackParamList,
    typeof MOVIE_DETAIL_SCREEN
  > {}
const MovieDetailsContainer: React.FC<
  MovieDetailsContainerProps
> = (): JSX.Element => {
  return <MovieDetails />;
};

export default MovieDetailsContainer;
