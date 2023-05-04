import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {heightPixel} from '../../scale/scaling';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    bg_img: {
      width: wp('100%'),
      height: hp('30%'),
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
      width: heightPixel(30),
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
      height: 200,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      padding: 20,
      justifyContent: 'space-evenly',
      margin: 5,
      marginTop: 20,
    },
    boxText: {
      alignItems: 'center',
      gap: 10,
    },
    boxImage: {
      height: 75,
      justifyContent: 'center',
    },
    menuBox: {
      width: wp('85%'),
      backgroundColor: 'white',
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      margin: 10,
      borderRadius: 16,
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    boxText2: {
      alignItems: 'flex-start',
      gap: 5,
    },
    priceText: {},
    leftPart: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
  });
