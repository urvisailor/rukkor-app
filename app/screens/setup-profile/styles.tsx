import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.roboto,
    color: COLORS.black,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.roboto,
  },
  card: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: 20,
    paddingVertical:20,
    marginTop:15,
    borderRadius:10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 64,
    height: 64,
  },
  col1: {
    width: '30%',
  },
  col2:{
    width:'70%'
  },
  iconText: {
    color: COLORS.black,
    fontSize: 24,
    marginBottom:10,
    fontFamily: FONTS.roboto,
  },
  arrow:{
    marginLeft:10,
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  logo: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default styles;
