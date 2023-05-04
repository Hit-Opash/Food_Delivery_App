import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    chatContainer: {
      alignItems: 'center',
      marginHorizontal: wp('5%'),
      gap: 15,
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
  });
