import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, Platform,
  Button, TouchableHighlight, Image,
  Alert, KeyboardAvoidingView, ImageBackground,
  TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import bgImage from '../assets/images/background.png';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    state = {
      firstName: '',
      lastName: '',
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    console.log(this.state);

    Alert.alert("Alert", "Button pressed "+viewId);
  }
// <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
// source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>


  render() {
    return (
      <ImageBackground source={bgImage} style = {styles.backgroundContainer}>        
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
          <TouchableWithoutFeedback style = {styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Icon name={Platform.OS === 'ios' ? 'ios-person-outline' : 'md-person'} style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28}/> 
                <TextInput style={styles.inputs}
                    placeholder="First Name"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(firstName) => this.setState({firstName})}/>
              </View>

              <View style={styles.inputContainer}>
                <Icon name={Platform.OS === 'ios' ? 'ios-person-outline' : 'md-person'} style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28}/>
                <TextInput style={styles.inputs}
                    placeholder="Last Name"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(lastName) => this.setState({lastName})}/>
              </View>

              <View style={styles.inputContainer}>
                <Icon name= {Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} 
                  size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                  style={styles.inputIcon}/>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
              </View>
              
              <View style={styles.inputContainer}>
                <Icon name= {Platform.OS === 'ios' ? 'ios-lock-outline' : 'md-lock'} 
                    size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                    style={styles.inputIcon}/>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
              </View>

              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
                <Text style={styles.signUpText}>Sign up</Text>
              </TouchableHighlight>
            </View>
          </TouchableWithoutFeedback>      
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#00b5ec',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: '#rgba(255, 255, 255, 0.8)',
  },
  signUpText: {
    color: 'black',
  }
});