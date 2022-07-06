import React, {useState, useEffect} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authnavigator from './AuthNavigator';
import MainStack from './MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, Text, View} from 'react-native';
const Stack = createStackNavigator();

function SPlashScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Phone');
      if (value) {
        return navigation.replace('MainStack');
      }
      navigation.replace('Authnavigator');
    } catch (error) {}
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View>
      <Text>1232112</Text>
    </View>
  );
}

export default SPlashScreen;
