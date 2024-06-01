import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {Movies} from '../../utils/types';
import movieCardStyles from './movieCardStyles';

interface MovieCardProps {
  // movie
  movie: Movies;
  // on Press navigate to details
  seeDetails: (id: string, name: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({movie, seeDetails}) => {
  const {Title, Poster, imdbID, type} = movie;
  return (
    <TouchableOpacity
      onPress={() => seeDetails(imdbID, Title)}
      style={movieCardStyles.container}>
      <Image
        source={{uri: Poster}}
        style={movieCardStyles.image}
        resizeMode="contain"
      />
      <View style={movieCardStyles.detailsContainer}>
        <Text>{Title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
