import React, {useEffect, useState} from 'react';
import {Box, Checkbox, Icon, Input, Stack} from 'native-base';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {String} from '../../common/strings';
import {theme} from '../../theme';
import {Images} from '../../common/images';
import LogoComponent from '../../component/LogoComponent';
import {styles} from './style';
import CustomButton from '../../component/CustomButton';
import CustomText from '../../component/CustomText';
import {Screens} from '../../common/screen';
import {useColorScheme} from 'react-native';
import * as yup from 'yup';
import {
  fontPixel,
  heightCount,
  heightPixel,
  moderateScale,
} from '../../scale/scaling';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {Key} from '../../common/storagekey';
import {Log} from '../../common/displayLog';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {inputSize} from '../../theme/sizes';

const SignUpScreen = ({navigation}) => {
  console.log(useWindowDimensions());
  const schema = useColorScheme();
  const [show, setShow] = React.useState(false);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const registration_ValidationSchema = yup.object().shape({
    userName: yup
      .string()
      .min(3, ({min}) => 'Please enter valid user name')
      .required('User Name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <>
      <ImageBackground
        source={Images.BackGroung1}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0, y: 0}}
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}
          scrollEnabled={isKeyboardVisible}>
          <View style={styles({schema}).container}>
            <View style={styles({schema}).container_1}>
              <LogoComponent />
            </View>
            <View style={styles({schema}).secondPartContainer}>
              <CustomText
                SIZE={fontPixel(18)}
                TEXT={String.Sign_Up_For_Free}
                CUSTOM_STYLE={styles({schema}).titleText}
                FAMILY={theme.fonts.BentonSans_Bold}
              />
              <Formik
                validationSchema={registration_ValidationSchema}
                initialValues={{
                  userName: '',
                  email: '',
                  password: '',
                  rememberPassword: true,
                  email_notification: true,
                }}
                onSubmit={async values => {
                  console.log(values);
                  const jsonValue = JSON.stringify(values);
                  await AsyncStorage.setItem(Key.Account_Details, jsonValue);
                  await AsyncStorage.setItem(Key.IsLogin, 'true');
                  Log({msg: `Account Details: ${jsonValue}`});
                  navigation.navigate(Screens.UserBioDataScreen);
                }}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  isValid,
                  setFieldValue,
                  touched,
                }) => (
                  <>
                    <View style={styles({schema}).container_2}>
                      <View>
                        <Stack
                          space={heightPixel(2)}
                          w="100%"
                          alignItems="center">
                          <View>
                            <Input
                              name="userName"
                              width="90%"
                              py={Platform.OS == 'ios' ? 4 : inputSize.size}
                              color={theme.colors[schema].text}
                              onChangeText={handleChange('userName')}
                              onBlur={handleBlur('userName')}
                              value={values.userName}
                              autoCapitalize="none"
                              InputLeftElement={
                                <Icon
                                  as={<Image source={Images.Profile} />}
                                  ml="4"
                                  size={heightPixel(6)}
                                />
                              }
                              placeholder={String.Anamwp}
                              fontSize={fontPixel(16)}
                              borderRadius={heightPixel(16)}
                              style={styles({schema}).input}
                            />
                            {errors.userName && touched.userName && (
                              <View
                                style={styles({schema}).errorDisplayContainer}>
                                <Icon
                                  as={<MaterialIcons name={'error'} />}
                                  size="3"
                                  mr={1}
                                  mt={1}
                                  ml={2}
                                  color="#FF0000"
                                />
                                <Text style={styles({schema}).errorText}>
                                  {errors.userName}
                                </Text>
                              </View>
                            )}
                          </View>
                          <View>
                            <Input
                              name="email"
                              width="90%"
                              py={Platform.OS == 'ios' ? 4 : inputSize.size}
                              color={theme.colors[schema].text}
                              autoCapitalize="none"
                              onChangeText={handleChange('email')}
                              onBlur={handleBlur('email')}
                              value={values.email}
                              keyboardType="email-address"
                              InputLeftElement={
                                <Icon
                                  as={<Image source={Images.Email_1} />}
                                  ml="4"
                                  size={heightPixel(6)}
                                />
                              }
                              placeholder={String.Email}
                              fontSize={fontPixel(16)}
                              borderRadius={heightPixel(16)}
                            />
                            {errors.email && touched.email && (
                              <View
                                style={styles({schema}).errorDisplayContainer}>
                                <Icon
                                  as={<MaterialIcons name={'error'} />}
                                  size="3"
                                  mr={1}
                                  mt={1}
                                  ml={2}
                                  color="#FF0000"
                                />
                                <Text style={styles({schema}).errorText}>
                                  {errors.email}
                                </Text>
                              </View>
                            )}
                          </View>
                          <View>
                            <Input
                              name="password"
                              width="90%"
                              py={Platform.OS == 'ios' ? 4 : inputSize.size}
                              color={theme.colors[schema].text}
                              onChangeText={handleChange('password')}
                              onBlur={handleBlur('password')}
                              value={values.password}
                              autoCapitalize="none"
                              InputLeftElement={
                                <Icon
                                  as={<Image source={Images.Password} />}
                                  ml="4"
                                  size={heightPixel(6)}
                                />
                              }
                              placeholder={String.Password}
                              fontSize={fontPixel(16)}
                              borderRadius={heightPixel(16)}
                            />
                            {errors.password && touched.password && (
                              <View
                                style={styles({schema}).errorDisplayContainer}>
                                <Icon
                                  as={<MaterialIcons name={'error'} />}
                                  size="3"
                                  mr={1}
                                  mt={1}
                                  ml={2}
                                  color="#FF0000"
                                />
                                <Text style={styles({schema}).errorText}>
                                  {errors.password}
                                </Text>
                              </View>
                            )}
                          </View>
                        </Stack>
                        <Stack
                          space={heightPixel(2)}
                          w="100%"
                          mt={heightPixel(5)}>
                          <Checkbox
                            size="sm"
                            defaultIsChecked
                            name="rememberPassword"
                            colorScheme="green"
                            checked={values.rememberPassword}
                            onPress={() =>
                              setFieldValue(
                                'rememberPassword',
                                !values.rememberPassword,
                              )
                            }
                            colorschema="green">
                            <CustomText
                              TEXT={String.Keep_Me_Signed_In}
                              SIZE={fontPixel(14)} //12
                              FAMILY={theme.fonts.BentonSans_Book}
                            />
                          </Checkbox>
                          <Checkbox
                            size="sm"
                            defaultIsChecked
                            name="email_notification"
                            colorScheme="green"
                            checked={values.email_notification}
                            onPress={() =>
                              setFieldValue(
                                'email_notification',
                                !values.email_notification,
                              )
                            }
                            colorschema="green">
                            <CustomText
                              TEXT={String.Email_Me_About_Special_Pricing}
                              SIZE={fontPixel(14)} //12
                              FAMILY={theme.fonts.BentonSans_Book}
                            />
                          </Checkbox>
                        </Stack>
                      </View>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <Stack space={heightPixel(4)} w="100%">
                        <CustomButton
                          title={String.Create_Account}
                          // onPress={handleSubmit}
                          onPress={() => {
                            navigation.navigate(Screens.UserBioDataScreen);
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate(Screens.SignInScreen);
                          }}>
                          <CustomText
                            TEXT={String.Already_Have_An_Account}
                            COLOR={theme.colors[schema].text}
                            SIZE={heightPixel(12)} //12
                            FAMILY={theme.fonts.BentonSans_Book}
                            UNDERLINE={true}
                          />
                        </TouchableOpacity>
                      </Stack>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;
