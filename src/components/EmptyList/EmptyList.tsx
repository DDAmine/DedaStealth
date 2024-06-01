import React from 'react';
import {View, Text} from 'react-native';

const EmptyList = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <Text>Non results found </Text>
    </View>
  );
};

export default EmptyList;
