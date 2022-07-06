import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authnavigator from './AppNavigator/AuthNavigator';
import MainStack from './AppNavigator/MainStack';
import SPlashScreen from './AppNavigator/SPlashScreen';

const Stack = createStackNavigator();

function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SPlashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SPlashScreen" component={SPlashScreen} />
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="Authnavigator" component={Authnavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigator;
