import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import React, {useState, useRef, useMemo, useCallback} from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import CustomText from '../../component/CustomText';
import {String} from '../../common/strings';
import {theme} from '../../theme';
import {Icon, Input} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import {fontPixel, heightPixel} from '../../scale/scaling';
import {Screens} from '../../common/screen';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const orderList = [
  {
    id: 1,
    img: Images.menu_1,
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '$ 35',
  },
  {
    id: 2,
    img: Images.menu_2,
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '$ 35',
  },
  {
    id: 3,
    img: Images.menu_3,
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '$ 35',
  },
  {
    id: 4,
    img: Images.menu_1,
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '$ 35',
  },
];

const ProfileScreen = ({navigation}) => {
  const schema = useColorScheme();
  const sheetRef = useRef();
  const snapPoints = useMemo(() => ['60%', '90%'], []);
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  // render
  const renderItem = useCallback(
    item => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <View style={styles({schema}).rootContainer}>
      <View>
        <Image
          source={Images.Profile_Img}
          style={styles({schema}).profileImg}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        backgroundStyle={{borderRadius: 28}}>
        <UserData />
      </BottomSheet>
    </View>
  );
};

const UserData = () => {
  const schema = useColorScheme();
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, paddingBottom: heightPixel(100)}}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles({schema}).bottomSheet_Container}>
        <View style={styles({schema}).goldMemberText}>
          <CustomText
            TEXT={String.Member_Gold}
            FAMILY={theme.fonts.BentonSans_Medium}
          />
        </View>
        <View style={styles({schema}).userNameContainer}>
          <View>
            <CustomText
              TEXT={'Hit Doshi'}
              SIZE={heightPixel(28)}
              FAMILY={theme.fonts.BentonSans_Bold}
              LINE_HEIGHT={heightPixel(36)}
            />
            <CustomText
              TEXT={'abc@gmail.com'}
              SIZE={heightPixel(14)}
              LINE_HEIGHT={heightPixel(22)}
            />
          </View>
          <Image
            source={Images.Edit_Pencil_Icon}
            style={styles({schema}).edit_pencile_icon}
          />
        </View>
        <TouchableOpacity>
          <View style={styles({schema}).voucherContainer}>
            <Image
              source={Images.Voucher_Icon}
              style={styles({schema}).voucherIcon}
            />
            <CustomText
              TEXT={'You Have 3 Voucher'}
              FAMILY={theme.fonts.BentonSans_Medium}
              SIZE={heightPixel(15)}
              LINE_HEIGHT={heightPixel(20)}
            />
          </View>
        </TouchableOpacity>
        <View style={styles({schema}).favouriteContainer}>
          <CustomText
            TEXT={String.Favourite}
            SIZE={heightPixel(15)}
            FAMILY={theme.fonts.BentonSans_Bold}
            LINE_HEIGHT={heightPixel(20)}
          />
          {orderList.map(element => {
            return (
              <View style={styles({schema}).orderContainer}>
                <View>
                  <Image
                    source={element.img}
                    style={styles({schema}).orderImg}
                  />
                </View>
                <View style={styles({schema}).textPart}>
                  <View style={styles({schema}).details}>
                    <CustomText
                      TEXT={element.name}
                      FAMILY={theme.fonts.BentonSans_Medium}
                      SIZE={heightPixel(15)}
                      LINE_HEIGHT={heightPixel(20)}
                      CUSTOM_STYLE={{flexWrap: 'wrap'}}
                    />
                    <CustomText TEXT={element.desc} />
                    <CustomText
                      TEXT={element.price}
                      FAMILY={theme.fonts.BentonSans_Bold}
                      SIZE={heightPixel(20)}
                      LINE_HEIGHT={heightPixel(24)}
                    />
                  </View>
                </View>
                <TouchableOpacity style={styles({schema}).buyAgainButtom}>
                  <CustomText
                    TEXT={String.Buy_Again}
                    SIZE={heightPixel(12)}
                    LINE_HEIGHT={heightPixel(12)}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
