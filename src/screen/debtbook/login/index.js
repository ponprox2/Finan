import React from 'react';
import {View} from 'react-native';
import LoginPage from './components/LoginScreen';

function Login({navigation}) {
  return (
    <View>
      <LoginPage navigation={navigation} />
    </View>
  );
}

export default Login;
