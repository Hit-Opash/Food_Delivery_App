import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    uploadPhoto_container: {
      flex: 1,
      margin: wp('5%'),
      gap: 20,
      marginBottom: wp('4%'),
    },
    bg_img: {
      width: wp('100%'),
      height: 150,
      position: 'absolute',
    },
    uploadPhoto_Img_Container: {
      width: wp('90%'),
      padding: 20,
      gap: 10,
      borderRadius: theme.size[6],
      borderColor: theme.colors[schema].borderColor,
      borderWidth: 1,
      alignItems: 'center',
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });
