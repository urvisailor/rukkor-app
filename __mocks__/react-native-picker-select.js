import React from 'react';
import { TextInput } from 'react-native';

const RNPickerSelect = ({ onValueChange, value, items, placeholder, style }) => {
  return (
    <TextInput
      testID="mock-picker"
      value={value}
      onChangeText={(val) => onValueChange(val)}
      placeholder={placeholder.label}
      style={style}
    />
  );
};

export default RNPickerSelect;