import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EmptyList from '../EmptyList/EmptyList';

interface CustomFlatListProps<T = any> extends FlatListProps<T> {
  data: T[];
  isLoading: boolean;
  isRefreshing?: boolean;
  isLoadingMore?: boolean;
  hasLoadedAll?: boolean;

  getDataOnMount: () => void;
  getMoreData?: () => void;
  getRefreshedData?: () => void;

  failedError?: string;
  loadingMoreError?: string;
  refreshError?: string;
  renderItem: ListRenderItem<any>;
  renderEmptyList?: () => JSX.Element;
}

const CustomFlatlist = <T,>({
  data,
  isLoading,
  isRefreshing,
  isLoadingMore,
  getMoreData,
  renderItem,
  renderEmptyList,
  loadingMoreError,
  getDataOnMount,
  failedError,
  hasLoadedAll,
  getRefreshedData,
  refreshError,
  onEndReachedThreshold = 0.4,
  numColumns,
  columnWrapperStyle,
  ...otherProps
}: CustomFlatListProps<T>): JSX.Element => {
  const renderFlatlist = useMemo(() => {
    if (failedError) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{failedError}</Text>
          <TouchableOpacity onPress={getDataOnMount}>
            <Text> try again</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      if (isLoading) {
        return <ActivityIndicator />;
      }
      return (
        <FlatList
          data={data}
          keyExtractor={(item: unknown, index: number) => index.toString()}
          renderItem={renderItem}
          onEndReached={getMoreData}
          numColumns={numColumns}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={<EmptyList />}
          ListFooterComponent={isLoadingMore ? <ActivityIndicator /> : null}
          {...otherProps}
        />
      );
    }
  }, [
    data,
    isLoading,
    isRefreshing,
    isLoadingMore,
    getMoreData,
    renderItem,
    renderEmptyList,
    loadingMoreError,
    getDataOnMount,
    failedError,
    hasLoadedAll,
    getRefreshedData,
    refreshError,
  ]);

  return <>{renderFlatlist}</>;
};

export default CustomFlatlist;
