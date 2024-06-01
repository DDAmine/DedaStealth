import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {UseFetchReturnType} from '../../hooks/useFetch';
import {MovieDetail} from '../../utils/types';

/**
 * Represents Movie detail screen ui
 * @returns JSX.Element
 */

interface MovieDetailsProps
  extends Omit<
    UseFetchReturnType<MovieDetail>,
    'setData' | 'refreshError' | 'getRefreshedData'
  > {}
const MovieDetails: React.FC<MovieDetailsProps> = ({
  apiCall,
  data,
  isLoading,
  refreshApiCall,
  isRefreshing,
  failedError,
}): JSX.Element => {
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  if (failedError) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{failedError}</Text>
      <TouchableOpacity onPress={apiCall}>
        <Text> try again</Text>
      </TouchableOpacity>
    </View>;
  }
  if (data) {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 16,
            gap: 20,
          }}>
          <Text> {data.Title} </Text>
          <Image
            source={{uri: data.Poster}}
            style={{width: 100, height: 100}}
          />
          <Text>{data.Plot}</Text>
          <View style={{flexDirection: 'row', gap: 5}}>
            {data.Ratings.map(item => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  borderWidth: 0.5,
                  padding: 5,
                }}>
                <Text numberOfLines={1}>{item.Source}</Text>
                <Text>{item.Value}</Text>
              </View>
            ))}
          </View>
          <View style={{flex: 1, gap: 10}}>
            <Text style={{fontSize: 20}}>Actors</Text>
            {data.Actors.split(',').map(item => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  borderWidth: 0.5,
                  padding: 5,
                }}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>

          <Text></Text>
        </View>
      </ScrollView>
    );
  }
  return <></>;
};
export default MovieDetails;
