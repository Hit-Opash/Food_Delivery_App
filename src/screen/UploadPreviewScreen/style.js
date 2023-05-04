import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    uploadPhotoPreview_container: {
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
    profileStyle_Container: {
      width: wp('70%'),
      height: hp('30%'),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: theme.size[6],
    },
    phofileImg: {
      width: '100%',
      height: '100%',
      resizeMode: 'stretch',
      borderRadius: theme.size[6],
    },
    closeIcon: {
      position: 'absolute',
      top: 15,
      right: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });
