import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import {String} from '../../common/strings';
import CustomButton from '../../component/CustomButton';
import CustomText, {variants} from '../../component/CustomText';
import {theme} from '../../theme';
import {Screens} from '../../common/screen';
import {fontPixel, heightPixel} from '../../scale/scaling';
import {Rating} from 'react-native-ratings';
import {Icon, Input} from 'native-base';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const OrderDetailsScreen = ({navigation}) => {
  const schema = useColorScheme();
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
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles({schema}).rootContainer}>
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View
              style={{
                gap: heightPixel(20),
                marginBottom: 250,
              }}>
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
              <CustomText
                SIZE={fontPixel(24)} //24
                TEXT={String.Order_details}
                FAMILY={theme.fonts.BentonSans_Bold}
                CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
              />
              <View style={{gap: heightPixel(20)}}>
                {orderList.map(element => {
                  return (
                    <View
                      style={styles({schema}).orderContainer}
                      key={element.id}>
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
                          <CustomText
                            TEXT={element.desc}
                            SIZE={heightPixel(15)}
                          />
                          <CustomText
                            TEXT={element.price}
                            FAMILY={theme.fonts.BentonSans_Bold}
                            SIZE={heightPixel(20)}
                            LINE_HEIGHT={heightPixel(24)}
                          />
                        </View>
                        <View style={styles({schema}).imgContainer}>
                          <TouchableOpacity>
                            <Image
                              source={Images.Minus_Icon}
                              style={styles({schema}).fun_Img}
                            />
                          </TouchableOpacity>
                          <CustomText TEXT={1} SIZE={fontPixel(16)} />
                          <TouchableOpacity>
                            <Image
                              source={Images.Plus_Icon}
                              style={styles({schema}).fun_Img}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          <View>
            <LinearGradient
              colors={theme.colors[schema].green_gradient}
              style={[styles({schema}).priceBox]}>
              <View style={styles({schema}).textBoxContainer}>
                <CustomText
                  TEXT={String.Sub_Total}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
                <CustomText
                  TEXT={'120 $'}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
              </View>
              <View style={styles({schema}).textBoxContainer}>
                <CustomText
                  TEXT={String.Delivery_Charge}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
                <CustomText
                  TEXT={'10 $'}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
              </View>
              <View style={styles({schema}).textBoxContainer}>
                <CustomText
                  TEXT={String.Discount}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
                <CustomText
                  TEXT={'20 $'}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
              </View>
              <View
                style={[
                  styles({schema}).textBoxContainer,
                  {marginVertical: heightPixel(8)},
                ]}>
                <CustomText
                  TEXT={String.Total}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
                <CustomText
                  TEXT={'150 $'}
                  FAMILY={theme.fonts.BentonSans_Medium}
                  COLOR={'white'}
                  SIZE={heightPixel(14)}
                />
              </View>
              <View style={styles({schema}).orderButton}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Screens.ConfirmOrderScreen)
                  }>
                  <CustomText
                    TEXT={String.Place_My_Order}
                    FAMILY={theme.fonts.BentonSans_Medium}
                    COLOR={'lightgreen'}
                    SIZE={heightPixel(14)}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderDetailsScreen;
