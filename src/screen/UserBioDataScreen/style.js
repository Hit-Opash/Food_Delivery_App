import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    forgotPass_container: {
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
    method_Container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      borderRadius: theme.size[2],
      borderColor: theme.colors[schema].border_color,
      borderWidth: 1,
      padding: theme.space[2],
    },
    methodData_Container: {
      gap: 12,
    },
    data: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
    button: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    errorText: {
      color: 'red',
    },
  });
