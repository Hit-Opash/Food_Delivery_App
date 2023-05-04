import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {heightPixel, widthPixel} from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    forgotPass_container: {
      flex: 1,
      margin: wp('5%'),
      gap: heightPixel(20),
      marginBottom: hp('4%'),
    },
    bg_img: {
      width: wp('100%'),
      height: hp('30%'),
      position: 'absolute',
    },
    method_Container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: widthPixel(20),
      borderRadius: heightPixel(22), //22
      borderColor: theme.colors[schema].text,
      borderWidth: 1,
      padding: heightPixel(24),
    },
    methodData_Container: {
      gap: heightPixel(12),
    },
    data: {
      flexDirection: 'row',
      gap: widthPixel(10),
      alignItems: 'center',
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    image: {
      width: heightPixel(48),
      resizeMode: 'contain',
    },
  });
