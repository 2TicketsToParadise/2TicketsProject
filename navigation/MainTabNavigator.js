import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
//import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
import Profile from '../screens/Pii/InputUserProfile';
// import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import weightLifting from '../screens/weightLifting';
// import CalendarScreen from '../screens/calendarScreen';
import HistoryScreen from '../screens/historyScreen';
import cardio from '../screens/cardio';

import UserInfo from '../screens/Pii/ViewUserProfile';


import dataNavigator from '../screens/dataNavigatorScreen';
import cardioDScreen from '../screens/cardioDataScreen';
import weightsDScreen from '../screens/weightsDataScreen';

//import UserForm from './../components/SignUp/UserForm';
//import SettingsScreen from '../screens/SettingsScreen';

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
  Profile: Profile,

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

const TestStack = createStackNavigator({

  UserInfo: UserInfo,
  dNS: dataNavigator,
  cDS: cardioDScreen,
  wDS: weightsDScreen,




},
  {
    headerMode: 'none',
  });

TestStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-nuclear' : 'md-nuclear'}
    />
  ),
};



// const LoginStack = createStackNavigator({
//   Login: LoginScreen,
//   SignUp: RegisterScreen,
//   Profile: Profile,
// });


// LoginStack.navigationOptions = {
//   tabBarLabel: 'Login',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-walk' : 'md-walk'}
//     />
//   ),
// };

// const UserStack = createStackNavigator({
//   User: UserForm,
// });
// UserStack.navigationOptions = {
//   tabBarLabel: 'User',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-walk' : 'md-walk'}
//     />
//   ),
// };


// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  TestStack,
  CardioStack,
  // UserStack,
  WeightsStack,



});
