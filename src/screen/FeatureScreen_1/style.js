import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../../theme';
export const styles = ({schema}) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexWrap: 'wrap',
    },
    imageContainer: {},
    feature1_Img: {
      width: wp('100%'),
      height: hp('45%'),
      resizeMode: 'stretch',
    },
    bottomPart: {
      width: wp('100%'),
      height: hp('45%'),
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    textPart: {
      gap: theme.space[1],
    },
    buttonView: {
      justifyContent: 'center',
    },
  });
