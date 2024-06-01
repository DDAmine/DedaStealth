import React from 'react';
import {Text, View} from 'react-native';
import CustomFlatlist from '../../components/CustomFlatlist/CustomFlatlist';
import {Movies} from '../../utils/types';
import {UseFetchPaginatedReturnType} from '../../hooks/useFetchPaginated';
import CustomInput from '../../components/CustomInput/CustomInput';

/**
 * Represents Home screen ui
 * @returns JSX.Element
 */

interface HomeProps
  extends Omit<
    UseFetchPaginatedReturnType<Movies>,
    'currentPage' | 'setCurrentPage' | 'setResultsCount' | 'setData'
  > {
  query: string;
  setQuery: (query: string) => void;
}
const Home: React.FC<HomeProps> = ({
  data,
  failedError,
  isLoading,
  isLoadingMore,
  getDataOnMount,
  getMoreData,
  query,
  setQuery,
}): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: 'white',
      }}>
      <CustomInput text={query} onChangeText={setQuery} />
      <CustomFlatlist<Movies>
        getDataOnMount={getDataOnMount}
        isLoading={isLoading}
        data={data}
        getMoreData={getMoreData}
        isLoadingMore={isLoadingMore}
        renderItem={({item, index}) => {
          return (
            <Text style={{height: 100}} key={index}>
              {item.Title}
            </Text>
          );
        }}
      />
    </View>
  );
};
export default Home;
