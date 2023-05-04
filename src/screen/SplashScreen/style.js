import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = ({schema}) =>
  StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
