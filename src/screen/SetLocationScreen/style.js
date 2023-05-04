import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    setLocation_container: {
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
    setLocation_Container: {
      borderRadius: theme.size[6], //22
      padding: 10,
      gap: 20,
      borderWidth: 1,
      borderColor: theme.colors[schema].text,
    },
    topPart: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },
    setLocation_Button: {
      borderRadius: theme.size[4], //16
      backgroundColor: theme.colors[schema].creamy,
      padding: 20,
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });
