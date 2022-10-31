import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AppNav, AuthNav, styles as routeStyles} from './routes';
import Splash from 'screens/splash';
import {useSelector} from 'react-redux';
import TabNav from './tabs';
import EditProfile from 'screens/profile/edit-profile';
import {Image} from 'react-native';
import {Images} from 'theme';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();

export default function MyStack() {
  const {accessToken} = useSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppNav" component={TabNav} options={{headerShown:"false"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
