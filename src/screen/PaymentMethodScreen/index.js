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
import React, {useState} from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import {String} from '../../common/strings';
import CustomButton from '../../component/CustomButton';
import {Screens} from '../../common/screen';
import {Input, Icon, Stack} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme';
import CustomText from '../../component/CustomText';

const PaymentMethodScreen = ({navigation}) => {
  const [selected, setSelect] = useState(null);
  const scheme = useColorScheme();
  const paymentMethod = [Images.PayPal, Images.Visa, Images.Payonner];
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({scheme}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles({scheme}).paymentMethod_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Image source={Images.Back} />
          </TouchableOpacity>
          <View>
            <CustomText
              SIZE={theme.size[7]} //25
              LINE_HEIGHT={theme.size[9]} //32
              TEXT={String.Payment_Method}
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
            {paymentMethod.map(function (element, id) {
              return (
                <TouchableOpacity
                  key={id}
                  style={[
                    styles({scheme}).paymentMethod_Img_Container,
                    selected == id && {backgroundColor: 'skyblue'},
                  ]}
                  onPress={() => setSelect(id)}>
                  <Image source={element} />
                  {console.log(element)}
                </TouchableOpacity>
              );
            })}
          </Stack>
          <View style={styles({scheme}).button}>
            <CustomButton
              title={String.Next}
              onPress={() => {
                navigation.navigate(Screens.UploadPhotoScreen);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PaymentMethodScreen;
