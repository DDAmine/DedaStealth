import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';

import {MovieStackParamList} from '../../navigation /MoviesStack/MoviesStackNavigation';
import {MOVIE_DETAIL_SCREEN} from '../../utils/screenNames';
import MovieDetails from './MovieDetails';
import {BASE_URL} from '../../utils/endpoints';
import {MovieDetail} from '../../utils/types';
import {useFetch} from '../../hooks/useFetch';

/**
 * Container used to separate Movie details logic as a wrapper to Movie details screen
 * @returns JSX.Element
 */

interface MovieDetailsContainerProps
  extends NativeStackScreenProps<
    MovieStackParamList,
    typeof MOVIE_DETAIL_SCREEN
  > {}
const MovieDetailsContainer: React.FC<MovieDetailsContainerProps> = ({
  navigation,
  route,
}): JSX.Element => {
  const {id} = route.params;
  const fetchData = async () => {
    const reponse = await fetch(
      `${BASE_URL}?i=${id}&apikey=26844980&plot=full`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const res: MovieDetail = await reponse.json();
    console.log(res);
    return res;
  };
  const {
    apiCall,
    data,
    isLoading,
    refreshApiCall,
    isRefreshing,
    failedError,
    setData,
  } = useFetch<MovieDetail>(async () => await fetchData());
  useEffect(() => {
    void apiCall();
  }, []);
  return <MovieDetails />;
};

export default MovieDetailsContainer;
