import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { heightPixel } from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({scheme}) =>
  StyleSheet.create({
    paymentMethod_container: {
      flex: 1,
      margin: wp('5%'),
      gap: 20,
      marginBottom: wp('4%'),
    },
    bg_img: {
      width: wp('100%'),
      height: hp('35%'),
      opacity: 0.2,
      position: 'absolute',
    },
    paymentMethod_Img_Container: {
      width: wp('90%'),
      borderRadius: theme.size[6],
      borderColor: theme.colors[scheme].text,
      borderWidth: 1,
      alignItems: 'center',
    },
    img: {
      width: heightPixel(100),
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });
