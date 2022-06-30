import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Tabs from '../screen/home/index';
// import DetailItem from '../screen/detail/index';
import Login from '../screen/debtbook/login';
import OTPScreen from '../screen/debtbook/login/components/OTPScreen';
import Home from '../screen/debtbook/home/components/index';
import Tabs from '../screen/debtbook/bottomNav/index';
import AddNewProduct from '../screen/debtbook/product/components/index';
const Stack = createStackNavigator();

function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={AddNewProduct} />
        {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigator;
