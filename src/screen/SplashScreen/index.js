import {
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import {theme} from '../../theme';
import {String} from '../../common/strings';
import LogoComponent from '../../component/LogoComponent';
import {Key} from '../../common/storagekey';
import {Log} from '../../common/displayLog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Screens} from '../../common/screen';

const SplashScreen = ({navigation}) => {
  const schema = useColorScheme();
  setTimeout(async () => {
    const IsFirstTime = await AsyncStorage.getItem(Key.IsFirstTime);
    Log({msg: `IsFirstTime Launch: ${IsFirstTime}`});
    if (IsFirstTime || IsFirstTime == null) {
      navigation.replace(Screens.SignInScreen);
    } else {
      navigation.replace(Screens.SignInScreen);
    }
  }, 3000);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground style={styles({schema}).imageBackground}>
        <LogoComponent />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
