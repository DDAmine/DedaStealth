import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  ListRenderItem,
} from 'react-native';

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
  return (
    <FlatList
      data={data}
      keyExtractor={(item: unknown, index: number) => index.toString()}
      renderItem={renderItem}
      onEndReached={getMoreData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoadingMore ? <ActivityIndicator /> : null}
    />
  );
};

export default CustomFlatlist;
