import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from './../screens/Auth/SignupScreen';
import ForgotPasswordScreen from './../screens/Auth/ForgotPasswordScreen';
import InputUserProfile from '../screens/Pii/InputUserProfile';


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: { screen: LoginScreen }, 
  Signup: { screen: SignupScreen }, 
  ForgotPassword: { screen: ForgotPasswordScreen }, 
  ProfileInput: {screen: InputUserProfile},


  Main: MainTabNavigator,
});