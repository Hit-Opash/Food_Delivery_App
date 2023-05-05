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
import {heightPixel} from '../../scale/scaling';

const UploadPhotoScreen = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [confirmShow, setConfirmShow] = React.useState(false);
  const schema = useColorScheme();
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles({schema}).uploadPhoto_container}>
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
          <View>
            <CustomText
              SIZE={theme.size[7]} //25
              LINE_HEIGHT={theme.size[9]} //32
              TEXT={String.UploadPhoto_Screen_T1}
              FAMILY={theme.fonts.BentonSans_Bold}
              CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
            />
            <CustomText
              SIZE={theme.size[7]} //25
              LINE_HEIGHT={theme.size[9]} //32
              TEXT={String.UploadPhoto_Screen_T2}
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
            <TouchableOpacity
              style={styles({schema}).uploadPhoto_Img_Container}>
              <Image source={Images.Gallery} style={styles({schema}).img} />
              <CustomText
                TEXT={String.From_Gallery}
                SIZE={theme.size[3]}
                LINE_HEIGHT={theme.size[7]}
                FAMILY={theme.fonts.BentonSans_Bold}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles({schema}).uploadPhoto_Img_Container}>
              <Image source={Images.Camera} style={styles({schema}).img} />
              <CustomText
                TEXT={String.Take_Photo}
                SIZE={theme.size[3]}
                LINE_HEIGHT={theme.size[7]}
                FAMILY={theme.fonts.BentonSans_Bold}
              />
            </TouchableOpacity>
          </Stack>
          <View style={styles({schema}).button}>
            <CustomButton
              title={String.Next}
              onPress={() => {
                navigation.navigate(Screens.UploadPreviewScreen);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UploadPhotoScreen;
