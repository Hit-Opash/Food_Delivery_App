import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {heightPixel, widthPixel} from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    bg_img: {
      width: wp('100%'),
      height: hp('35%'),
      opacity: 0.2,
      position: 'absolute',
    },
    rootContainer: {
      gap: heightPixel(20),
      margin: wp('5%'),
    },
    topContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    titleContainer: {
      width: wp('70%'),
    },
    notificationIconContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: heightPixel(45),
      width: heightPixel(45),
      justifyContent: 'center',
      borderRadius: heightPixel(20),
    },
    notificationIcon: {
      width: heightPixel(20),
      resizeMode: 'contain',
    },
    searchBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    filterIconContainer: {
      height: heightPixel(55),
      width: heightPixel(55),
      borderRadius: heightPixel(20),
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterIcon: {
      width: heightPixel(40),
      resizeMode: 'contain',
    },
    flateList: {
      alignSelf: 'center',
    },
    box: {
      width: wp('40%'),
      height: heightPixel(200),
      backgroundColor: 'white',
      borderRadius: heightPixel(20),
      alignItems: 'center',
      padding: heightPixel(20),
      justifyContent: 'space-evenly',
      margin: heightPixel(5),
      marginTop: heightPixel(20),
    },
    boxText: {
      alignItems: 'center',
      gap: heightPixel(10),
    },
    boxImage: {
      justifyContent: 'center',
    },
    image1: {
      width: wp('25%'),
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    menuBox: {
      width: wp('85%'),
      backgroundColor: 'white',
      padding: widthPixel(10),
      flexDirection: 'row',
      alignItems: 'center',
      margin: heightPixel(5),
      borderRadius: heightPixel(20),
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    boxText2: {
      gap: heightPixel(5),
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    image2: {
      width: heightPixel(65),
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'contain',
    },
    priceText: {},
    leftPart: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: heightPixel(10),
    },
  });
