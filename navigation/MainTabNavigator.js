import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Profile from '../screens/Pii/InputUserProfile';
import weightLifting from '../screens/WeightLifting';
import cardio from '../screens/Cardio';
import UserInfo from '../screens/Pii/ViewUserProfile';
import dataNavigator from '../screens/DataNavigatorScreen';
import cardioDScreen from '../screens/CardioDataScreen';
import weightsDScreen from '../screens/WeightsDataScreen';


const WeightsStack = createStackNavigator({
  Weights: weightLifting,
},
  {
    headerMode: 'none',
  });

WeightsStack.navigationOptions = {
  tabBarLabel: 'Weight Lifting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CardioStack = createStackNavigator({
  Cardio: cardio,

},
  {
    headerMode: 'none',
  });

CardioStack.navigationOptions = {
  tabBarLabel: 'Cardio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-walk' : 'md-walk'}
    />
  ),
};

const UserStack = createStackNavigator({
  UserInfo: UserInfo,
  dNS: dataNavigator,
  cDS: cardioDScreen,
  wDS: weightsDScreen,
  Profile: Profile,
},
);

UserStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-nuclear' : 'md-nuclear'}
    />
  ),
};


export default createBottomTabNavigator({
  UserStack,
  CardioStack,
  WeightsStack,
});
