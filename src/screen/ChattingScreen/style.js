import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    chattingScreen_container: {
      marginTop: hp('3%'),
      marginHorizontal: wp('5%'),
      gap: 15,
      alignItems: 'flex-start',
      height: '100%',
    },
    userBox: {
      flexDirection: 'row',
      width: wp('90%'),
      padding: wp('3%'),
      backgroundColor: 'white',
      gap: 10,
      marginVertical: 10,
      borderRadius: 16,
      alignItems: 'center',
    },
    chatBox: {
      width: '100%',
      position: 'absolute',
      bottom: 50,
    },
    scrollView: {
      paddingRight: 15,
      height: '55%',
    },
  });
