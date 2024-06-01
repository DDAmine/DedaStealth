import React from 'react';
import {View} from 'react-native';
import CustomFlatlist from '../../components/CustomFlatlist/CustomFlatlist';
import {Movies} from '../../utils/types';
import {UseFetchPaginatedReturnType} from '../../hooks/useFetchPaginated';
import CustomInput from '../../components/CustomInput/CustomInput';
import MovieCard from '../../components/MovieCard/MovieCard';

/**
 * Represents Home screen ui
 * @returns JSX.Element
 */

interface HomeProps
  extends Omit<
    UseFetchPaginatedReturnType<Movies>,
    | 'currentPage'
    | 'setCurrentPage'
    | 'setResultsCount'
    | 'resultsCount'
    | 'refreshError'
    | 'getRefreshedData'
  > {
  query: string;
  setQuery: (query: string) => void;
  checkDetails: (id: string, name: string) => void;
}
const Home: React.FC<HomeProps> = ({
  data,
  failedError,
  isLoading,
  isLoadingMore,
  getDataOnMount,
  loadingMoreError,
  getMoreData,
  query,
  setQuery,
  checkDetails,
}): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: 'white',
        gap: 10,
      }}>
      <CustomInput text={query} onChangeText={setQuery} />
      <CustomFlatlist<Movies>
        getDataOnMount={getDataOnMount}
        columnWrapperStyle={{gap: 10}}
        contentContainerStyle={{gap: 10}}
        isLoading={isLoading}
        data={data}
        failedError={failedError}
        loadingMoreError={loadingMoreError}
        getMoreData={getMoreData}
        isLoadingMore={isLoadingMore}
        renderItem={({item, index}) => {
          return <MovieCard seeDetails={checkDetails} movie={item} />;
        }}
      />
    </View>
  );
};
export default Home;
