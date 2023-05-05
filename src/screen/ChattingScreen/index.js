import {
  ImageBackground,
  SafeAreaView,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './style';
import {Images} from '../../common/images';
import {theme} from '../../theme';
import CustomText from '../../component/CustomText';
import {String} from '../../common/strings';
import {Icon, Input} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {fontPixel, heightPixel} from '../../scale/scaling';

const ChattingScreen = ({navigation, route}) => {
  const schema = useColorScheme();
  const {id, name, desk, dp, time, status} = route.params.data;
  const [chat, setChat] = useState(['Hello']);
  const [text, setText] = useState('');
  const scrollViewRef = useRef();
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles({schema}).chattingScreen_container}>
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
              SIZE={fontPixel(24)} //25
              TEXT={String.Chat}
              FAMILY={theme.fonts.BentonSans_Bold}
            />
          </View>
          <View style={styles({schema}).userBox}>
            <Image source={dp} style={styles({schema}).bgImg} />
            <View
              style={{
                alignItems: 'flex-start',
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View style={{gap: heightPixel(10), alignItems: 'flex-start'}}>
                  <CustomText
                    TEXT={name}
                    FAMILY={theme.fonts.BentonSans_Medium}
                  />
                  <CustomText TEXT={status} />
                </View>
                <Image source={Images.Call} />
              </View>
            </View>
          </View>

          <View style={{width: '100%'}}>
            <FlatList
              data={chat}
              style={styles({schema}).scrollView}
              renderItem={({item, index}) => (
                <ChatText
                  msg={item}
                  bgColor="lightgreen"
                  position="flex-end"
                  textColor="black"
                />
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
          <View style={styles({schema}).chatBox}>
            <Input
              backgroundColor={'white'}
              borderRadius={heightPixel(12)}
              multiline={true}
              value={text}
              onChangeText={text => {
                setText(text);
              }}
              InputRightElement={
                <Icon
                  as={
                    <TouchableOpacity
                      onPress={() => {
                        if (text != '') {
                          setChat([...chat, text]);
                          setText(null);
                        }
                      }}>
                      <Image source={Images.Send} />
                    </TouchableOpacity>
                  }
                  mr="4"
                  size={heightPixel(6)}
                />
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const ChatText = ({
  msg,
  bgColor = 'lightblue',
  position = 'flex-start',
  textColor = 'black',
}) => {
  return (
    <View
      style={{
        maxWidth: widthPercentageToDP('80%'),
        backgroundColor: bgColor,
        alignSelf: position,
        padding: heightPixel(14),
        borderRadius: heightPixel(12),
        alignItems: 'flex-start',
        marginVertical: heightPixel(5),
      }}>
      <CustomText TEXT={msg} COLOR={textColor} />
    </View>
  );
};

export default ChattingScreen;
