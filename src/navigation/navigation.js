/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import FeatureScreen1 from '../screen/FeatureScreen_1';
import FeatureScreen2 from '../screen/FeatureScreen_2';
import SignUpScreen from '../screen/SignUpScreen';
import SignInScreen from '../screen/SignInScreen';
import UserBioDataScreen from '../screen/UserBioDataScreen';
import PaymentMethodScreen from '../screen/PaymentMethodScreen';
import UploadPhotoScreen from '../screen/UploadPhotoScreen';
import UploadPreviewScreen from '../screen/UploadPreviewScreen';
import SetLocationScreen from '../screen/SetLocationScreen';
import SuccessScreen from '../screen/SuccessScreen';
import MobileVerificationScreen from '../screen/MobileVerificationScreen';
import EmailVerificationScreen from '../screen/EmailVerificationScreen';
import ForgotPassMethodScreen from '../screen/ForgotPassMethodScreen';
import ResetPasseordScreen from '../screen/ResetPasswordScreen';
import HomeScreen from '../screen/HomeScreen';
import {theme} from '../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../common/images';
import CustomText from '../component/CustomText';
import {String} from '../common/strings';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ProfileScreen from '../screen/ProfileScreen';
import ShopScreen from '../screen/ShopScreen';
import ChatScreen from '../screen/ChatScreen';
import ChattingScreen from '../screen/ChattingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ResetPasswordScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="FeatureScreen1" component={FeatureScreen1} />
      <Stack.Screen name="FeatureScreen2" component={FeatureScreen2} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen
        name="MobileVerificationScreen"
        component={MobileVerificationScreen}
      />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
      />

      <Stack.Screen name="SetLocationScreen" component={SetLocationScreen} />
      <Stack.Screen name="UserBioDataScreen" component={UserBioDataScreen} />
      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
      />
      <Stack.Screen name="UploadPhotoScreen" component={UploadPhotoScreen} />
      <Stack.Screen
        name="UploadPreviewScreen"
        component={UploadPreviewScreen}
      />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPassMethodScreen"
        component={ForgotPassMethodScreen}
      />
      <Stack.Screen
        name="ResetPasseordScreen"
        component={ResetPasseordScreen}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="BottomTab" component={CustomTab} />
      <Stack.Screen name="ChattingScreen" component={ChattingScreen} />
    </Stack.Navigator>
  );
};
// import * as Animatable from 'react-native-animatable';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: Images.Home_Menu,
    component: HomeScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: Images.Profile,
    component: ProfileScreen,
  },
  {
    route: 'Shop',
    label: 'Shop',
    icon: Images.Shop_Menu,
    component: ShopScreen,
  },
  {
    route: 'Chat',
    label: 'Chat',
    icon: Images.Chat_Menu,
    component: ChatScreen,
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);
  const schema = useColorScheme();

  useEffect(() => {
    // if (focused) {
    //   // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
    //   viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    //   textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    // } else {
    //   viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    //   textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    // }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles({schema}).container, {flex: focused ? 1 : 0.5}]}>
      <View>
        <View
          style={[
            styles({schema}).btn,
            focused ? styles({schema}).focusBtn : null,
          ]}>
          <Image
            source={item.icon}
            // color={focused ? Colors.white : Colors.primary}
          />
          <View ref={textViewRef}>
            {focused && (
              <Text style={styles({schema}).focuseText}>{item.label}</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export function CustomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          margin: wp('5%'),
          borderRadius: 16,
          padding: 32,
          height: 75,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = ({schema}) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 16,
    },
    focusBtn: {
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      width: 105,
    },
    focuseText: {
      color: theme.colors[schema].text,
      paddingHorizontal: 8,
      fontSize: 14,
    },
  });

// const BottomTabs = params => {
//   const schema = useColorScheme();
//   console.log('BottomTabs Params', params);
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         tabBarActiveTintColor: 'green',
//         tabBarInactiveTintColor: theme.colors[schema].text,
//         tabBarActiveBackgroundColor: 'lightgreen',
//         tabBarLabelStyle: {},
//         tabBarStyle: {
//           position: 'absolute',
//           margin: wp('5%'),
//           marginBottom: 30,
//           borderRadius: theme.size[6],
//         },
//         headerShown: false,
//         tabBarLabelPosition: 'beside-icon',
//       }}>
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: ({color, size, focused}) =>
//             focused && (
//               <View
//                 style={{
//                   left: 20,
//                   top: 17,
//                 }}>
//                 <Text
//                   style={{
//                     fontSize: theme.size[3],
//                     fontFamily: theme.fonts.BentonSans_Medium,
//                     lineHeight: 16,
//                   }}>
//                   Home
//                 </Text>
//               </View>
//             ),
//           tabBarIcon: ({color, size, focused}) => (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 top: 15,
//               }}>
//               <Image
//                 source={Images.Home_Menu}
//                 style={[styles.icon, {tintColor: color}]}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: ({color, size, focused}) =>
//             focused && (
//               <View
//                 style={{
//                   left: 15,
//                   top: 15,
//                 }}>
//                 <Text>Home</Text>
//               </View>
//             ),
//           tabBarIcon: ({color, size, focused}) => (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 top: 15,
//               }}>
//               <Image
//                 source={Images.Profile_Menu}
//                 style={[styles.icon, {tintColor: color}]}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ShopScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: ({color, size, focused}) =>
//             focused && (
//               <View
//                 style={{
//                   left: 15,
//                   top: 15,
//                 }}>
//                 <Text>Shop</Text>
//               </View>
//             ),
//           tabBarIcon: ({color, size, focused}) => (
//             console.log({focused}),
//             (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   top: 15,
//                 }}>
//                 <Image
//                   source={Images.Shop_Menu}
//                   style={[styles.icon, {tintColor: color}]}
//                 />
//               </View>
//             )
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ChatScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: ({color, size, focused}) =>
//             focused && (
//               <View
//                 style={{
//                   left: 15,
//                   top: 15,
//                 }}>
//                 <Text>Chat</Text>
//               </View>
//             ),
//           tabBarIcon: ({color, size, focused}) => (
//             console.log({focused}),
//             (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   top: 15,
//                 }}>
//                 <Image
//                   source={Images.Chat_Menu}
//                   style={[styles.icon, {tintColor: color}]}
//                 />
//               </View>
//             )
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

export default Navigation;

// const styles = StyleSheet.create({});

//
// <>
//   <View
//     style={
//       focused && {
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         borderColor: 'rgb(255,255,255)',
//         backgroundColor: 'rgb(255,255,255)',
//         justifyContent: 'center',
//         alignItems: 'center',
//         transform: [
//           {
//             translateY: -5,
//           },
//         ],
//       }
//     }
//   />
//   <View
//     style={{
//       position: 'absolute',
//       transform: [
//         {
//           translateY: -3,
//         },
//       ],
//     }}>
//     <Icon
//       as={
//         <FontAwesome
//           name={
//             color == theme?.colors?.primary[600]
//               ? 'users'
//               : 'users'
//           }
//         />
//       }
//       size={focused ? 'lg' : 'md'}
//       m={2}
//       _light={{
//         color: color,
//       }}
//       _dark={{
//         color: color,
//       }}
//     />
//   </View>
// </>