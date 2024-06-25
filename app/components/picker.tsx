import React from 'react';
import {StyleSheet, ViewStyle, TextStyle, View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {COLORS, FONTS} from '../utils/constants';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  items: {label: string; value: string}[];
  placeholder?: {label: string; value: string};
  label: string;
  icon: any;
  style?: {
    inputIOS?: ViewStyle;
    inputAndroid?: ViewStyle;
    placeholder?: TextStyle;
  };
}

const CountryPicker: React.FC<Props> = ({
  value,
  onValueChange,
  items,
  placeholder,
  style,
  label,
  icon,
}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={[styles.row, styles.picker]}>
        {icon && icon}
        <Text style={styles.value}>{value}</Text>
        <RNPickerSelect
          value={value}
          onValueChange={onValueChange}
          items={items}
          placeholder={placeholder || {label: 'Select a country', value: ''}}
          style={{
            ...pickerSelectStyles,
            ...style,
          }}
        />
      </View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 30, 
    backgroundColor: COLORS.grey,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30, 
    backgroundColor: COLORS.grey,
  },
  placeholder: {
    color: 'black',
  },
});
const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontFamily: FONTS.roboto,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: 10,
  },
  value: {
    marginLeft: 4,
  },
});

export default CountryPicker;
