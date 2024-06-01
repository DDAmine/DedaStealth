import React, {type Ref, useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';

import customInputStyles from './customInputStyles';
import icons from '../../utils/icons';

interface CustomInputProps {
  // text to be displayed in the search bar
  text: string;
  // function to be called on text change
  onChangeText: (text: string) => void;
  // placeholder of the search bar
  placeholder?: string;
  // default value of the search bar
  defaultValue?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  defaultValue,
  onChangeText,
  placeholder,
  text,
}) => {
  return (
    <View
      style={{
        ...customInputStyles.container,
      }}>
      <TextInput
        id="search"
        style={customInputStyles.textInput}
        value={text}
        onChangeText={onChangeText}
        placeholderTextColor={'grey'}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <Image
        style={customInputStyles.loopIcon}
        resizeMode="contain"
        source={icons.LOOP_ICON}
      />
    </View>
  );
};

export default CustomInput;
