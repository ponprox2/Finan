import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authnavigator from './AuthNavigator';
import MainStack from './MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

function SPlashScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Phone');
      setPhoneNumber(value);
    } catch (error) {}
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <NavigationContainer>
      {/* {phoneNumber ? <MainStack /> : <Authnavigator />} */}
      <Authnavigator />
    </NavigationContainer>
  );
}

export default SPlashScreen;
