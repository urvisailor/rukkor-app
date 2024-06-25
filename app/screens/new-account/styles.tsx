import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  passwordRequirements: {
    backgroundColor: COLORS.yellow,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  requirementsText: {
    fontFamily: FONTS.roboto,
    fontSize: 14,
    marginBottom: 5,
  },
  requirementsItem: {
    fontFamily: FONTS.roboto,
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  cancelButtonText: {
    color: COLORS.primary,
    fontFamily: FONTS.roboto,
  },
  emailIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.roboto,
    color: COLORS.black,
    marginBottom: 30,
  },
  logo: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 20,
  },
  arrow:{
    marginLeft:10
  }
});
export default styles;
