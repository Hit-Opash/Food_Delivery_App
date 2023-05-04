import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../common/images';
import {styles} from './style';
import CustomText from '../../component/CustomText';
import {String} from '../../common/strings';
import {theme} from '../../theme';
import {Icon, Input} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import {fontPixel, heightPixel} from '../../scale/scaling';

const RestaurantData = [
  {
    id: 1,
    icon: Images.Restaurant_1,
    name: 'Vegan Resto',
    time: '12 Mins',
  },
  {
    id: 2,
    icon: Images.Restaurant_2,
    name: 'Healthy Food',
    time: '8 Mins',
  },
  {
    id: 3,
    icon: Images.Restaurant_3,
    name: 'Good Food',
    time: '12 Mins',
  },
  {
    id: 4,
    icon: Images.Restaurant_4,
    name: 'Smart Resto',
    time: '8 Mins',
  },
  {
    id: 5,
    icon: Images.Restaurant_5,
    name: 'Vegan Resto',
    time: '12 Mins',
  },
  {
    id: 6,
    icon: Images.Restaurant_6,
    name: 'Healthy Food',
    time: '8 Mins',
  },
];

const menuData = [
  {
    id: 1,
    icon: Images.menu_1,
    name: 'Herbal Pancake',
    desc: 'Warung herbal',
    price: '$7',
  },
  {
    id: 2,
    icon: Images.menu_2,
    name: 'Fruit Salad',
    desc: 'Wijie Resto',
    price: '$5',
  },
  {
    id: 3,
    icon: Images.menu_3,
    name: 'Green Noddle',
    desc: 'Noodle Home',
    price: '$15',
  },
];

const HomeScreen = () => {
  const schema = useColorScheme();
  return (
    <>
      <ImageBackground
        source={Images.BackGroung2}
        style={styles({schema}).bg_img}
      />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{marginBottom: 70}}>
          <View style={styles({schema}).rootContainer}>
            <View style={styles({schema}).topContainer}>
              <View style={styles({schema}).titleContainer}>
                <CustomText
                  TEXT={String.Find_Your}
                  FAMILY={theme.fonts.BentonSans_Bold}
                  COLOR={theme.colors[schema].text}
                  SIZE={fontPixel(32)}
                  CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
                />
                <CustomText
                  TEXT={String.Favourite_Food}
                  FAMILY={theme.fonts.BentonSans_Bold}
                  COLOR={theme.colors[schema].text}
                  SIZE={fontPixel(32)}
                  CUSTOM_STYLE={{alignSelf: 'flex-start', textAlign: 'left'}}
                />
              </View>
              <TouchableOpacity
                style={styles({schema}).notificationIconContainer}>
                <Image
                  source={Images.Notification}
                  style={styles({schema}).notificationIcon}
                />
              </TouchableOpacity>
            </View>
            <SearchBar schema={schema} />
            <RestaurantList schema={schema} />
            <PopularMenuList schema={schema} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const SearchBar = ({schema}) => {
  return (
    <View style={styles({schema}).searchBarContainer}>
      <Input
        placeholder={String.Search_Hint}
        width="80%"
        borderRadius={16}
        fontSize={14}
        alignSelf="flex-start"
        autoCapitalize="none"
        InputLeftElement={
          <Icon
            ml="3"
            size={heightPixel(6)}
            as={<Image source={Images.Search_Icon} />}
          />
        }
      />
      <TouchableOpacity style={styles({schema}).filterIconContainer}>
        <Image source={Images.Filter} style={styles({schema}).filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantList = ({schema}) => {
  const [scrollHorizontal, setscrollHorizontal] = useState(true);

  return (
    <View style={styles({schema}).restauranlistContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CustomText
          TEXT={String.Nearest_Restaurant}
          FAMILY={theme.fonts.BentonSans_Bold}
          SIZE={fontPixel(16)}
        />
        <TouchableOpacity
          onPress={() => {
            setscrollHorizontal(!scrollHorizontal);
          }}>
          <CustomText
            TEXT={scrollHorizontal ? String.View_More : String.Less}
            FAMILY={theme.fonts.BentonSans_Book}
            SIZE={fontPixel(12)}
            COLOR={'orange'}
          />
        </TouchableOpacity>
      </View>
      {scrollHorizontal ? (
        <FlatList
          key={'h'}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={RestaurantData}
          renderItem={({item}) => <RestaurantBox data={item} schema={schema} />}
          keyExtractor={item => item.id}
          style={styles(schema).flateList}
        />
      ) : (
        <FlatList
          key={'v'}
          numColumns={2}
          scrollEnabled={false}
          data={RestaurantData}
          renderItem={({item}) => <RestaurantBox data={item} schema={schema} />}
          keyExtractor={item => item.id}
          style={styles(schema).flateList}
        />
      )}
    </View>
  );
};

const RestaurantBox = ({data, schema}) => {
  return (
    <TouchableOpacity style={styles({schema}).box}>
      <View style={styles({schema}).boxImage}>
        <Image source={data.icon} />
      </View>
      <View style={styles({schema}).boxText}>
        <CustomText TEXT={data.name} FAMILY={theme.fonts.BentonSans_Bold} />
        <CustomText TEXT={data.time} FAMILY={theme.fonts.BentonSans_Book} />
      </View>
    </TouchableOpacity>
  );
};

const PopularMenuBox = ({data, schema}) => {
  return (
    <TouchableOpacity style={styles({schema}).menuBox}>
      <View style={styles({schema}).leftPart}>
        <View>
          <Image source={data.icon} />
        </View>
        <View style={styles({schema}).boxText2}>
          <CustomText
            TEXT={data.name}
            FAMILY={theme.fonts.BentonSans_Bold}
            SIZE={fontPixel(16)}
          />
          <CustomText
            TEXT={data.desc}
            FAMILY={theme.fonts.BentonSans_Book}
            SIZE={fontPixel(12)}
          />
        </View>
      </View>
      <CustomText
        TEXT={data.price}
        FAMILY={theme.fonts.BentonSans_Bold}
        SIZE={fontPixel(22)}
        CUSTOM_STYLE={styles({schema}).priceText}
      />
    </TouchableOpacity>
  );
};
const PopularMenuList = ({schema}) => {
  const [scrollHorizontal, setscrollHorizontal] = useState(true);

  return (
    <View style={styles({schema}).restauranlistContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CustomText
          TEXT={String.Popular_Menu}
          FAMILY={theme.fonts.BentonSans_Bold}
          SIZE={fontPixel(16)}
        />
      </View>
      <FlatList
        scrollEnabled={false}
        data={menuData}
        renderItem={({item}) => <PopularMenuBox data={item} schema={schema} />}
        keyExtractor={item => item.id}
        style={styles(schema).flateList}
      />
    </View>
  );
};
export default HomeScreen;
