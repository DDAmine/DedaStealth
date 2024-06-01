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
import movieDetailsStyles from './movieDetailsStyles';

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
      <View style={movieDetailsStyles.center}>
        <ActivityIndicator />
      </View>
    );
  }
  if (failedError) {
    <View style={movieDetailsStyles.center}>
      <Text>{failedError}</Text>
      <TouchableOpacity onPress={apiCall}>
        <Text> try again</Text>
      </TouchableOpacity>
    </View>;
  }
  if (data) {
    return (
      <ScrollView>
        <View style={movieDetailsStyles.container}>
          <Text> {data.Title} </Text>
          <Image source={{uri: data.Poster}} style={movieDetailsStyles.image} />
          <Text>{data.Plot}</Text>
          <View style={movieDetailsStyles.rating}>
            {data.Ratings.map(item => (
              <View style={movieDetailsStyles.ratingCard}>
                <Text numberOfLines={1}>{item.Source}</Text>
                <Text>{item.Value}</Text>
              </View>
            ))}
          </View>
          <View style={movieDetailsStyles.actorsSection}>
            <Text style={movieDetailsStyles.title}>Actors</Text>
            {data.Actors.split(',').map(item => (
              <View style={movieDetailsStyles.actors}>
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
