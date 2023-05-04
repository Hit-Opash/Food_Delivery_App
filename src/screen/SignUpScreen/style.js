import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    container_1: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: hp('25%'),
    },
    bg_img: {
      position: 'absolute',
      width: '100%',
      height: hp('30%'),
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondPartContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    container_2: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleText: {},
    createAccount: {
      textDecorationLine: 'underline',
      textAlign: 'center',
      color: 'green',
    },
    input: {},
    errorText: {
      color: '#FF0000',
      fontSize: 11,
    },
    errorDisplayContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
  });
