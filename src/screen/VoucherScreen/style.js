import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {heightPixel, widthPixel} from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    bg_img: {
      width: wp('100%'),
      height: hp('30%'),
      position: 'absolute',
      opacity: 0.2,
    },
    rootContainer: {
      alignSelf: 'center',
      gap: heightPixel(20),
      marginBottom: 20,
    },
    adsImg: {
      borderRadius: heightPixel(16),
    },
    offerBg: {
      width: wp('90%'),
    },
    textPart: {
      width: wp('45%'),
      alignSelf: 'flex-end',
      gap: heightPixel(10),
      paddingVertical: heightPixel(20),
      paddingRight: heightPixel(15),
    },
    orderButtom: {
      alignSelf: 'flex-start',
      backgroundColor: 'white',
      borderRadius: heightPixel(16),
      padding: heightPixel(14),
    },
  });
