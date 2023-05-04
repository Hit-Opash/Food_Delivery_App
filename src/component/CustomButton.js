import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {theme} from '../theme';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomText from './CustomText';
import {fontPixel, heightPixel, scale, widthPixel} from '../scale/scaling';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomButton = ({title, onPress}) => {
  const schema = useColorScheme();
  return (
    <LinearGradient
      colors={theme.colors[schema].green_gradient}
      style={styles({schema}).linearGradient}>
      <TouchableOpacity style={styles({schema}).button} onPress={onPress}>
        <CustomText
          FAMILY={theme.fonts.BentonSans_Bold}
          SIZE={fontPixel(14)}
          TEXT={title}
          COLOR={theme.colors[schema].button_text}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;

const styles = ({schema}) =>
  StyleSheet.create({
    linearGradient: {
      borderRadius: heightPixel(16),
      alignSelf: 'center',
    },
    button: {
      textAlign: 'center',
      margin: heightPixel(10),
      backgroundColor: 'transparent',
      paddingVertical: heightPixel(10),
      paddingHorizontal: widthPixel(15),
    },
  });
