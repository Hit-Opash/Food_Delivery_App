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

const UploadPreviewScreen = ({navigation}) => {
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
        <View style={styles({schema}).uploadPhotoPreview_container}>
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
              TEXT={String.UploadPhoto_Screen_T1}
              FAMILY={theme.fonts.BentonSans_Bold}
              ALIGN_SELF={true}
            />
            <CustomText
              SIZE={theme.size[7]} //25
              LINE_HEIGHT={theme.size[9]} //32
              TEXT={String.UploadPhoto_Screen_T2}
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
          <View style={styles({schema}).profileStyle_Container}>
            <Image
              source={Images.Profile_Img}
              style={styles({schema}).phofileImg}
            />
            <Image
              source={Images.Close_Icon}
              style={styles({schema}).closeIcon}
            />
          </View>
          <View style={styles({schema}).button}>
            <CustomButton
              title={String.Next}
              onPress={() => {
                navigation.navigate(Screens.SetLocationScreen);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UploadPreviewScreen;
