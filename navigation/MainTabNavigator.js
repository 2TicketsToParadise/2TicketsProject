import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
//import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Profile from '../screens/cardio';
import weightLifting from '../screens/weightLifting';
//import UserForm from './../components/SignUp/UserForm';
//import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: weightLifting,
},
{
  headerMode: 'none',
});

HomeStack.navigationOptions = {
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

const TestStack = createStackNavigator({
  Profile: Profile,
  Test: TestScreen,
},
{
  headerMode: 'none',
});

TestStack.navigationOptions = {
  tabBarLabel: 'Cardio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-nuclear' : 'md-nuclear'}
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: RegisterScreen,
  Profile: Profile,
},
{
  headerMode: 'none',
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-walk' : 'md-walk'}
    />
  ),
};

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
  LoginStack,
  TestStack, 
  // UserStack,
  HomeStack,
  
  // SettingsStack,
});
