import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import {String} from '../../common/strings';
import CustomButton from '../../component/CustomButton';
import {Screens} from '../../common/screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomText from '../../component/CustomText';
import {theme} from '../../theme';
import {fontPixel, heightPixel} from '../../scale/scaling';

const MobileVerificaionScreen = ({navigation}) => {
  const schema = useColorScheme();

  const mobile_No = '+6282045****';
  const time = '01:30';
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles({schema}).forgotPass_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Image source={Images.Back} />
          </TouchableOpacity>
          <View>
            <CustomText
              SIZE={fontPixel(24)} //25
              LINE_HEIGHT={heightPixel(32)} //32
              TEXT={String.OTP_Screen_T1}
              FAMILY={theme.fonts.BentonSans_Bold}
              CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
            />
            <CustomText
              SIZE={fontPixel(24)} //25
              LINE_HEIGHT={heightPixel(32)} //32
              TEXT={String.OTP_Screen_T2}
              FAMILY={theme.fonts.BentonSans_Bold}
              CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
            />
          </View>
          <View>
            <CustomText
              SIZE={fontPixel(14)} //14
              LINE_HEIGHT={heightPixel(22)} //22
              TEXT={String.OTP_Screen_D1 + ' ' + mobile_No + ' .'}
              FAMILY={theme.fonts.BentonSans_Book}
              CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
            />
            <CustomText
              SIZE={fontPixel(14)} //14
              LINE_HEIGHT={heightPixel(22)} //22
              TEXT={String.OTP_Screen_D2 + ' ' + time + ' .'}
              FAMILY={theme.fonts.BentonSans_Book}
              CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
            />
          </View>
          <OTPInputView
            style={styles({schema}).otpInput}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles({schema}).underlineStyleBase}
            codeInputHighlightStyle={styles({schema}).underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View style={styles({schema}).button}>
            <CustomButton
              title={String.Next}
              onPress={() => {
                navigation.navigate(Screens.ResetPasseordScreen);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MobileVerificaionScreen;
