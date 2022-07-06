import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from '../../screen/debtbook/bottomNav/index';
import AddNewProduct from '../../screen/debtbook/product/components/index';
import ListProduct from '../../screen/debtbook/listProduct/components/index';
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNav"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
      <Stack.Screen name="BottomTabNav" component={Tabs} />
    </Stack.Navigator>
  );
}

export default MainStack;
