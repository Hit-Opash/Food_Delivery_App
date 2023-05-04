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
    mobileNo: yup.string().required('Mobile number is required'),
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
            <Image source={Images.Back} />
          </TouchableOpacity>
          <Formik
            validationSchema={bioData_ValidationSchema}
            initialValues={{
              f_name: '',
              l_name: '',
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
                    ALIGN_SELF={true}
                  />
                  <CustomText
                    SIZE={theme.size[7]} //25
                    LINE_HEIGHT={theme.size[9]} //32
                    TEXT={String.BioData_Screen_T2}
                    FAMILY={theme.fonts.BentonSans_Bold}
                    ALIGN_SELF={true}
                  />
                </View>
                <View>
                  <CustomText
                    SIZE={theme.size[3]} //14
                    LINE_HEIGHT={theme.size[6]} //22
                    TEXT={String.Security_D1}
                    FAMILY={theme.fonts.BentonSans_Book}
                    ALIGN_SELF={true}
                  />
                  <CustomText
                    SIZE={theme.size[3]} //14
                    LINE_HEIGHT={theme.size[6]} //22
                    TEXT={String.Security_D2}
                    FAMILY={theme.fonts.BentonSans_Book}
                    ALIGN_SELF={true}
                  />
                </View>
                <Stack space={4} w="100%" alignItems="center">
                  <Input
                    name="f_name"
                    width="100%"
                    py="5"
                    color={theme.colors[schema].text}
                    autoCapitalize="none"
                    onChangeText={handleChange('f_name')}
                    onBlur={handleBlur('f_name')}
                    value={values.f_name}
                    placeholder={String.FirstName}
                    fontSize={theme.size[3]}
                    borderRadius={theme.size[2]}
                    placeholderTextColor={theme.colors[schema].placeHolder}
                  />
                  {errors.f_name && touched.f_name && (
                    <Text style={styles({schema}).errorText}>
                      {errors.f_name}
                    </Text>
                  )}
                  <Input
                    name="l_name"
                    width="100%"
                    py="5"
                    onChangeText={handleChange('l_name')}
                    onBlur={handleBlur('l_name')}
                    value={values.l_name}
                    color={theme.colors[schema].text}
                    autoCapitalize="none"
                    placeholder={String.LastName}
                    fontSize={theme.size[3]}
                    borderRadius={theme.size[2]}
                    placeholderTextColor={theme.colors[schema].placeHolder}
                  />
                  {errors.l_name && touched.l_name && (
                    <Text style={styles({schema}).errorText}>
                      {errors.l_name}
                    </Text>
                  )}
                  <Input
                    name="mobileNo"
                    width="100%"
                    py="5"
                    color={theme.colors[schema].text}
                    autoCapitalize="none"
                    placeholder={String.MobileNo}
                    fontSize={theme.size[3]}
                    borderRadius={theme.size[2]}
                    keyboardType={'number-pad'}
                    onChangeText={handleChange('mobileNo')}
                    onBlur={handleBlur('mobileNo')}
                    value={values.mobileNo}
                    placeholderTextColor={theme.colors[schema].placeHolder}
                  />
                  {errors.mobileNo && touched.mobileNo && (
                    <Text style={styles({schema}).errorText}>
                      {errors.mobileNo}
                    </Text>
                  )}
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
