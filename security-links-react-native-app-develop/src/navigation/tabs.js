import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, commonStyle, Fonts, Images} from 'theme';
import GuardHome from 'screens/guardhome';
import ProfileDetail from 'screens/profile/profile-detail';
import {styles as routeStyles} from './routes';
import images from 'theme/images';
import {MyTabBar} from './my-tabbar';
import Schedule from 'screens/schedule';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <View style={styles.tabWrapper}>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
          tabBarStyle: styles.tabBarStyle,
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={GuardHome}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            headerStyle: routeStyles.headerStyle,
            headerTitle: 'Schedule',
            headerTitleStyle: routeStyles.headerTitleStyle,
            headerTitleAlign: 'center',
          }}
          name="Calendar"
          component={GuardHome}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Clock"
          component={GuardHome}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Notifications"
          component={GuardHome}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Contact"
          component={GuardHome}
        />

        <Tab.Screen
          options={({route, navigation}) => {
            return {
              headerShown: true,
              headerStyle: routeStyles.headerStyle,
              headerTitle: 'My Profile',
              headerTitleStyle: routeStyles.headerTitleStyle,
              headerTitleAlign: 'center',
              headerRight: () => (
                <TouchableOpacity
                  style={[commonStyle.screenPadding]}
                  onPress={() => navigation.navigate('editProfile')}>
                </TouchableOpacity>
              ),
              tabBarIcon: ({focused}) => {
                return (
                  <Image
                    style={[styles.bellIcon, focused && styles.focusedColor]}
                    source={Images.profileTabIcon}
                  />
                );
              },
            };
          }}
          name="Profile"
          component={GuardHome}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  tabWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeIcon: {
    height: 25,
    width: 30,
    resizeMode: 'contain',
  },
  focusedColor: {
    tintColor: Colors?.secondary,
  },
  learningIcon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  drawerIcon: {
    width: 27,
    height: 20,
    resizeMode: 'contain',
  },
  bellIcon: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
  },
  userIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
  badgeStyle: {
    fontFamily: Fonts.Poppins.SemiBold,
  },
  tabLabelStyle: {
    fontFamily: Fonts.Poppins.Medium,
    color: Colors.secondary,
    fontSize: 12,
    bottom: 5,
  },
  tabBarStyle: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    ...Platform.select({
      ios: {
        // height: 52 + insets.bottom,
      },
      android: {
        height: 70,
      },
    }),
  },
  profileEditIcon: {
    width: 24,
    height: 24,
  },
});
