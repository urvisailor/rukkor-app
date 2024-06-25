import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../utils/constants';
interface Props {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: any;
}
const CustomButton: React.FC<Props> = ({
  onPress,
  title,
  style,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.row}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
        {icon && icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.roboto,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomButton;
