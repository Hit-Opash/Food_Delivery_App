import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  PermissionsAndroid,
  Platform,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import Geolocation from '@react-native-community/geolocation';
import {Log} from '../../common/displayLog';

const SetLocationScreen = ({navigation}) => {
  const schema = useColorScheme();
  const [show, setShow] = React.useState(false);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [locationStatus, setLocationStatus] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation();
        } else {
          setLocationStatus('Permission Denied');
          await Linking.openSettings();
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  function getAddressFromCoordinates({latitude, longitude}) {
    return new Promise(resolve => {
      const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`;
      fetch(url)
        .then(res => res.json())
        .then(resJson => {
          // the response had a deeply nested structure :/
          if (
            resJson &&
            resJson.Response &&
            resJson.Response.View &&
            resJson.Response.View[0] &&
            resJson.Response.View[0].Result &&
            resJson.Response.View[0].Result[0]
          ) {
            resolve(resJson.Response.View[0].Result[0].Location.Address.Label);
          } else {
            resolve();
          }
        })
        .catch(e => {
          console.log('Error in getAddressFromCoordinates', e);
          resolve();
        });
    });
  }
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        Log({msg: currentLatitude + ' ' + currentLongitude});
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles({schema}).setLocation_container}>
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
              TEXT={String.Set_Your_Location}
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
          <View style={styles({schema}).setLocation_Container}>
            <View style={styles({schema}).topPart}>
              <Image source={Images.Map_Pin_Img} />
              <CustomText
                TEXT={String.Your_Location}
                SIZE={theme.size[4]}
                LINE_HEIGHT={theme.size[5]}
                FAMILY={theme.fonts.BentonSans_Medium}
              />
            </View>
            <TouchableOpacity
              style={styles({schema}).setLocation_Button}
              onPress={() => requestLocationPermission()}>
              <CustomText
                TEXT={String.Set_Location}
                SIZE={theme.size[3]}
                LINE_HEIGHT={theme.size[4]}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <CustomText
                TEXT={currentLatitude}
                SIZE={theme.size[3]}
                LINE_HEIGHT={theme.size[4]}
              />
              <CustomText
                TEXT={'  ,  '}
                SIZE={theme.size[3]}
                LINE_HEIGHT={theme.size[4]}
              />
              <CustomText
                TEXT={currentLongitude}
                SIZE={theme.size[3]}
                LINE_HEIGHT={theme.size[4]}
              />
            </View>
          </View>
          <View style={styles({schema}).button}>
            <CustomButton
              title={String.Finish}
              onPress={() => {
                navigation.popToTop();
                navigation.navigate(Screens.SuccessScreen, {
                  msg: String.Profile_Success_Msg,
                  renderScreen: Screens.HomeScreen,
                });
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SetLocationScreen;
