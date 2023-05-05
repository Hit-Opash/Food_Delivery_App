import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {heightPixel, widthPixel} from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    chatContainer: {
      alignItems: 'center',
      marginHorizontal: wp('5%'),
      gap: heightPixel(20),
      margin: hp('5%'),
    },
    bg_img: {
      width: wp('100%'),
      height: hp('35%'),
      opacity: 0.2,
      position: 'absolute',
    },
    userBox: {
      flexDirection: 'row',
      width: wp('90%'),
      padding: widthPixel(10),
      backgroundColor: 'white',
      gap: widthPixel(10),
      marginVertical: heightPixel(5),
      borderRadius: heightPixel(16),
      alignItems: 'center',
    },
    dpImg: {
      flex: 0.3,
      resizeMode: 'contain',
    },
  });
