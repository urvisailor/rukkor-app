import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    alignSelf: 'center',
  },
  passwordInput: {
    marginBottom: 10,
  },
  forgotPassword: {
    color: COLORS.primary,
    fontFamily: FONTS.roboto,
    fontSize: 12,
  },
  languageInput: {
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  createAccountButtonText: {
    color: COLORS.primary,
  },
  emailIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  rightIcon:{
    alignSelf:'flex-end'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
