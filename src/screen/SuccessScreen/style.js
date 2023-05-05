import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    bg_img: {
      width: wp('100%'),
      height: hp('40%'),
      position: 'absolute',
    },
    successScreenContainer: {
      flex: 1,
      margin: hp('5%'),
    },
    tickImg: {
      flex: 1,
      width: wp('40%'),
      justifyContent: 'flex-end',
    },
    img: {
      resizeMode: 'contain',
      width: wp('40%'),
    },
    msgPart: {
      flex: 1,
    },
    textContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 15,
    },
    button: {},
  });
