import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  useColorScheme,
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
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Log} from '../../common/displayLog';
import {Key} from '../../common/storagekey';
import {fontPixel, heightPixel} from '../../scale/scaling';

const UserBioDataScreen = ({navigation}) => {
  const schema = useColorScheme();
  const [show, setShow] = React.useState(false);
  const [confirmShow, setConfirmShow] = React.useState(false);
  const bioData_ValidationSchema = yup.object().shape({
    f_name: yup
      .string()
      .min(3, ({min}) => 'Please enter valid first name')
      .required('First name is required'),
    l_name: yup
      .string()
      .min(3, ({min}) => 'Please enter valid last name')
      .required('Last name is required'),
    mobileNo: yup
      .string()
      .min(10, ({min}) => 'Please enter valid mobile number')
      .required('Mobile number is required'),
  });
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
            <Image
              source={Images.Back}
              style={{
                width: heightPixel(48),
                height: undefined,
                aspectRatio: 1,
              }}
            />
          </TouchableOpacity>
          <Formik
            validationSchema={bioData_ValidationSchema}
            initialValues={{
              f_name: 'Hit',
              l_name: 'Doshi',
              mobileNo: '',
            }}
            onSubmit={async values => {
              console.log(values);
              const jsonValue = JSON.stringify(values);
              await AsyncStorage.setItem(Key.UserBioData, jsonValue);
              Log({msg: `UserBioData Details: ${jsonValue}`});
              navigation.navigate(Screens.PaymentMethodScreen);
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
                <View>
                  <CustomText
                    SIZE={theme.size[7]} //25
                    LINE_HEIGHT={theme.size[9]} //32
                    TEXT={String.BioData_Screen_T1}
                    FAMILY={theme.fonts.BentonSans_Bold}
                    CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
                  />
                  <CustomText
                    SIZE={theme.size[7]} //25
                    LINE_HEIGHT={theme.size[9]} //32
                    TEXT={String.BioData_Screen_T2}
                    FAMILY={theme.fonts.BentonSans_Bold}
                    CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
                  />
                </View>
                <View>
                  <CustomText
                    SIZE={theme.size[3]} //14
                    LINE_HEIGHT={theme.size[6]} //22
                    TEXT={String.Security_D1}
                    FAMILY={theme.fonts.BentonSans_Book}
                    CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
                  />
                  <CustomText
                    SIZE={theme.size[3]} //14
                    LINE_HEIGHT={theme.size[6]} //22
                    TEXT={String.Security_D2}
                    FAMILY={theme.fonts.BentonSans_Book}
                    CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
                  />
                </View>
                <Stack space={4} w="100%" alignItems="center">
                  <View>
                    <Input
                      name="f_name"
                      width="100%"
                      py={4}
                      color={theme.colors[schema].text}
                      autoCapitalize="none"
                      onChangeText={handleChange('f_name')}
                      onBlur={handleBlur('f_name')}
                      value={values.f_name}
                      placeholder={String.FirstName}
                      fontSize={fontPixel(16)}
                      borderRadius={heightPixel(16)}
                      placeholderTextColor={theme.colors[schema].placeHolder}
                    />
                    {errors.f_name && touched.f_name && (
                      <View style={styles({schema}).errorDisplayContainer}>
                        <Icon
                          as={<MaterialIcons name={'error'} />}
                          size="3"
                          mr={1}
                          ml={2}
                          color="#FF0000"
                        />
                        <Text style={styles({schema}).errorText}>
                          {errors.f_name}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View>
                    <Input
                      name="l_name"
                      width="100%"
                      py={4}
                      onChangeText={handleChange('l_name')}
                      onBlur={handleBlur('l_name')}
                      value={values.l_name}
                      color={theme.colors[schema].text}
                      autoCapitalize="none"
                      placeholder={String.LastName}
                      fontSize={fontPixel(16)}
                      borderRadius={heightPixel(16)}
                      placeholderTextColor={theme.colors[schema].placeHolder}
                    />
                    {errors.l_name && touched.l_name && (
                      <View style={styles({schema}).errorDisplayContainer}>
                        <Icon
                          as={<MaterialIcons name={'error'} />}
                          size="3"
                          mr={1}
                          ml={2}
                          color="#FF0000"
                        />
                        <Text style={styles({schema}).errorText}>
                          {errors.l_name}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View>
                    <Input
                      name="mobileNo"
                      width="100%"
                      py={4}
                      color={theme.colors[schema].text}
                      autoCapitalize="none"
                      placeholder={String.MobileNo}
                      fontSize={fontPixel(16)}
                      borderRadius={heightPixel(16)}
                      keyboardType={'number-pad'}
                      onChangeText={handleChange('mobileNo')}
                      onBlur={handleBlur('mobileNo')}
                      value={values.mobileNo}
                      placeholderTextColor={theme.colors[schema].placeHolder}
                    />
                    {errors.mobileNo && touched.mobileNo && (
                      <View style={styles({schema}).errorDisplayContainer}>
                        <Icon
                          as={<MaterialIcons name={'error'} />}
                          size="3"
                          mr={1}
                          ml={2}
                          color="#FF0000"
                        />
                        <Text style={styles({schema}).errorText}>
                          {errors.mobileNo}
                        </Text>
                      </View>
                    )}
                  </View>
                </Stack>
                <View style={styles({schema}).button}>
                  <CustomButton
                    title={String.Next}
                    // onPress={() => {
                    //   navigation.navigate(Screens.PaymentMethodScreen);
                    // }}
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UserBioDataScreen;
