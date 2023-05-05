import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {theme} from '../../theme';

export const styles = ({schema}) =>
  StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    logoImageContainer: {
      alignItems: 'center',
    },
    textPart: {},
    logoImage: {
      resizeMode: 'contain',
      width: widthPercentageToDP('50%'),
    },
  });
