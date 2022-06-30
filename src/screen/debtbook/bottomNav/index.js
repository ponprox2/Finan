import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../home/components/index';
import ShopOnline from './ShopOnline';
import InOut from './InOut';
import Other from './Other';
import Customer from './Customer';

import Manager from '../../../assets/icon/Manager.svg';
import OnlineStore from '../../../assets/icon/OnlineStore.svg';
import InOutIcon from '../../../assets/icon/InOutIcon.svg';
import UserIcon from '../../../assets/icon/UserIcon.svg';
import OtherIcon from '../../../assets/icon/OtherIcon.svg';

import {View} from 'react-native';
import {COLORS, globalStyles} from '../../../constants/index';

const Tab = createBottomTabNavigator();

function Tabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarLabelStyle: {color: focused ? 'red' : 'blue'},
        tabBarStyle: {position: 'absolute', paddingBottom: 5},
      }}>
      <Tab.Screen
        navigation={navigation}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <Manager
                  fill={
                    props.focused ? COLORS.greenLighter : COLORS.greyDarkerThan
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ShopOnline"
        component={ShopOnline}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <OnlineStore
                  fill={
                    props.focused ? COLORS.greenLighter : COLORS.greyDarkerThan
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="InOut"
        component={InOut}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <InOutIcon
                  fill={
                    props.focused ? COLORS.greenLighter : COLORS.greyDarkerThan
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={Customer}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <UserIcon
                  fill={
                    props.focused ? COLORS.greenLighter : COLORS.greyDarkerThan
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <OtherIcon
                  fill={
                    props.focused ? COLORS.greenLighter : COLORS.greyDarkerThan
                  }
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
