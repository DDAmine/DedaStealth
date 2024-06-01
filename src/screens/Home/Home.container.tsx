import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {HOME} from '../../utils/screenNames';
import {MovieStackParamList} from '../../navigation /MoviesStack/MoviesStackNavigation';
import Home from './Home';
import {BASE_URL} from '../../utils/endpoints';
import useFetchPaginated from '../../hooks/useFetchPaginated';
import {Movies, PaginatedApplication} from '../../utils/types';

/**
 * Container used to separate Home logic as a wrapper to Home screen
 * @returns JSX.Element
 */
interface HomeContainerProps
  extends NativeStackScreenProps<MovieStackParamList, typeof HOME> {}
const HomeContainer: React.FC<HomeContainerProps> = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);
  const {getDataOnMount, getMoreData} = useFetchPaginated<Movies>(
    async page => await fetchData(page),
  );
  const fetchData = async (page: number) => {
    const reponse = await fetch(
      `${BASE_URL}?page=${page}?&apikey=26844980&s=${
        debouncedQuery.length > 1 ? debouncedQuery : 'happy'
      }`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const res: PaginatedApplication<Movies> = await reponse.json();
    console.log(res);
    return res;
  };
  useEffect(() => {
    getDataOnMount();
  }, []);
  return <Home />;
};

export default HomeContainer;
