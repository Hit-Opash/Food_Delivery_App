import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import {String} from '../../common/strings';
import CustomButton from '../../component/CustomButton';
import {Screens} from '../../common/screen';
import {Input, Icon, Stack} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme';
import CustomText from '../../component/CustomText';
import {useColorScheme} from 'react-native';
import {fontPixel, heightPixel} from '../../scale/scaling';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {inputSize} from '../../theme/sizes';

const ResetPasswordScreen = ({navigation}) => {
  const schema = useColorScheme();
  const [show, setShow] = React.useState(false);
  const [confirmShow, setConfirmShow] = React.useState(false);
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0, y: 0}}
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}
          scrollEnabled={true}>
          <View style={styles({schema}).forgotPass_container}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Image
                source={Images.Back}
                style={{
                  width: heightPixel(48),
                  height: undefined,
                  aspectRatio: 1,
                }}
              />
            </TouchableOpacity>
            <CustomText
              SIZE={fontPixel(24)} //25
              LINE_HEIGHT={heightPixel(32)} //32
              TEXT={String.ResetPass_Screen_Title}
              FAMILY={theme.fonts.BentonSans_Bold}
              CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
            />

            <View>
              <CustomText
                SIZE={fontPixel(14)} //14
                LINE_HEIGHT={heightPixel(22)} //22
                TEXT={String.ResetPass_Screen_D1}
                FAMILY={theme.fonts.BentonSans_Book}
                CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
              />
              <CustomText
                SIZE={fontPixel(14)} //14
                LINE_HEIGHT={heightPixel(22)} //22
                TEXT={String.ResetPass_Screen_D2}
                FAMILY={theme.fonts.BentonSans_Book}
                CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
              />
            </View>
            <Stack space={heightPixel(4)} w="100%" alignItems="center">
              <Input
                type={show ? 'text' : 'password'}
                py={Platform.OS == 'ios' ? 4 : inputSize.size}
                color={theme.colors[schema].text}
                autoCapitalize="none"
                fontSize={fontPixel(16)}
                borderRadius={heightPixel(16)}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={heightPixel(6)}
                      mr="4"
                      color={theme.colors.green_gradient}
                    />
                  </Pressable>
                }
                placeholder={String.Password}
              />
              <Input
                type={show ? 'text' : 'password'}
                py={Platform.OS == 'ios' ? 4 : inputSize.size}
                fontSize={fontPixel(16)}
                borderRadius={heightPixel(16)}
                color={theme.colors[schema].text}
                autoCapitalize="none"
                InputRightElement={
                  <Pressable onPress={() => setConfirmShow(!confirmShow)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={confirmShow ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={heightPixel(6)}
                      mr="4"
                      color={theme.colors[schema].text}
                    />
                  </Pressable>
                }
                placeholder={String.Confirm_Password}
              />
            </Stack>
            <View style={styles({schema}).button}>
              <CustomButton
                title={String.Save}
                onPress={() => {
                  navigation.replace(Screens.SuccessScreen, {
                    msg: String.Reset_Pass_Success_msg,
                    renderScreen: Screens.SignInScreen,
                  });
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default ResetPasswordScreen;
