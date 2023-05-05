import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { widthPixel } from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    bg_img: {
      width: wp('100%'),
      height: hp('40%'),
      position: 'absolute',
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
    customRatingBarStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
      gap: widthPixel(10),
    },
    starImageStyle: {
      width: widthPixel(40),
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'cover',
    },
    chatBox: {
      width: wp('90%'),
      alignSelf: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: wp('90%'),
    },
    submitButton: {
      width: wp('55%'),
    },
    skipButton: {
      colors: 'white',
      width: wp('30%'),
    },
  });
