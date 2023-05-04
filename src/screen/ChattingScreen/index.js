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
            <Image source={Images.Back} />
          </TouchableOpacity>
          <View>
            <CustomText
              SIZE={theme.size[7]} //25
              LINE_HEIGHT={theme.size[9]} //32
              TEXT={String.Chat}
              FAMILY={theme.fonts.BentonSans_Bold}
            />
          </View>
          <View style={styles({schema}).userBox}>
            <Image source={dp} />
            <View
              style={{
                alignItems: 'flex-start',
                gap: 10,
                width: '75%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View style={{gap: 10, alignItems: 'flex-start'}}>
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
              py={5}
              backgroundColor={'white'}
              borderRadius={12}
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
                  size={6}
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
        padding: 14,
        borderRadius: 12,
        alignItems: 'flex-start',
        marginVertical: 5,
      }}>
      <CustomText TEXT={msg} COLOR={textColor} />
    </View>
  );
};

export default ChattingScreen;
