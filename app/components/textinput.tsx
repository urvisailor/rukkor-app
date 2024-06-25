import React from 'react';
import {View, TextInput, StyleSheet, Text, ViewStyle} from 'react-native';
import {COLORS, FONTS} from '../utils/constants';
interface Props {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle;
  editable?: boolean;
  rightLabel?: any;
  leftIcon?: any;
  rightIcon?: any;
}

const CustomTextInput: React.FC<Props> = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  style,
  editable,
  leftIcon,
  rightLabel,
  rightIcon,
  ...others
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        {rightLabel && rightLabel}
      </View>
      <View style={styles.inputView}>
        <View style={styles.firstInput}>
          {leftIcon && leftIcon}
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            editable={editable}
            onChangeText={onChangeText}
            {...others}
          />
        </View>
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 5,
    fontFamily: FONTS.roboto,
  },
  input: {
    fontFamily: FONTS.roboto,
    fontSize: 14,
    marginLeft: 7,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent:'space-between',
    backgroundColor: COLORS.grey,
  },
  firstInput:{
    flexDirection:'row'
  }
});

export default CustomTextInput;
