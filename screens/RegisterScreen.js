import React from 'react';
import { ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard} from 'react-native';

import { Platform } from 'react-native';
import bgImage from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
  
  //Top banner
  static navigationOptions = {
    title: 'SignUp',
  };
  //Show/Hide password
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false,

      userName: '',
      password: '',
      verifyPwd: '',
    };

  }

  onClickListener = (viewId) => {
    console.log(this.state.userName);
    console.log(this.state.password);

        if (this.state.password == this.state.verifyPwd) {
            Alert.alert("Alert", "Button pressed "+viewId)
    } else {
            Alert.alert("Alert", "Password's do not match! Try again!")
    }
  }


  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true})
    } else {
      this.setState({ showPass: true, press: false})
    }
  }


  render() {
    //navitgate pages
    const {navigate} = this.props.navigation;

    return (
    
    <ImageBackground source={bgImage} style = {styles.backgroundContainer}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <TouchableWithoutFeedback style = {styles.container} onPress={Keyboard.dismiss}>
          <View style = {styles.container}>
            <View style = {styles.logoContainer}>
              <Text style = {styles.logoText}>Workout Tracker</Text>
              <Image source={logo} style={styles.logo}>
              </Image>
              
            </View>
            
            <View style={styles.inputContainer}>
              {/* <View style={{paddingBottom: 10}}> */}
                    {/* Platform.OS === 'ios' ? something : andriodSomething */}
              <Icon name= {Platform.OS === 'ios' ? 'ios-person-outline' : 'md-person'} 
                size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                style={styles.inputIcon}/>
              <TextInput 
                style={styles.input}
                placeholder={'Username'}
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect= {false}
                autoCapitalize='none'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                underlineColorAndroid='transparent'
                onChangeText={(userName) => this.setState({userName})}
              />
            </View>

            <View style={styles.inputContainer}>
              {/* Platform.OS === 'ios' ? something : andriodSomething */}
              <Icon name= {Platform.OS === 'ios' ? 'ios-lock-outline' : 'md-lock'} 
                size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                style={styles.inputIcon}/>

              <TextInput 
                style={styles.input}
                placeholder={'Password'}
                returnKeyType='next'
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry= {this.state.showPass}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}
              />
              {/* Show/Hide password */}
              <TouchableOpacity onPress={this._onPressButton} onPress= {this.showPass.bind(this)} style={styles.btnEye}>
                    {/* Platform.OS === 'ios' ? something : andriodSomething */}
                <Icon name = {this.state.press == false ? (Platform.OS === 'ios' ? 'ios-eye-outline' : 'md-eye') : (Platform.OS === 'ios' ? 'ios-eye-off-outline' : 'md-eye-off')} size = {26} color={'rgba(255, 255, 255, 0.7)'} style={styles.btneye} />
              </TouchableOpacity>
            </View> 
            
            <View style={styles.inputContainer}>
              {/* Platform.OS === 'ios' ? something : andriodSomething */}
              <Icon name= {Platform.OS === 'ios' ? 'ios-lock-outline' : 'md-lock'} 
                size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                style={styles.inputIcon}/>

              <TextInput 
                style={styles.input}
                placeholder={'Re-Enter Password'}
                returnKeyType='go'
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry= {this.state.showPass}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
                onChangeText={(verifyPwd) => this.setState({verifyPwd})}
              />
              {/* Show/Hide password */}
              <TouchableOpacity onPress={this._onPressButton} onPress= {this.showPass.bind(this)} style={styles.btnEye}>
                    {/* Platform.OS === 'ios' ? something : andriodSomething */}
                <Icon name = {this.state.press == false ? (Platform.OS === 'ios' ? 'ios-eye-outline' : 'md-eye') : (Platform.OS === 'ios' ? 'ios-eye-off-outline' : 'md-eye-off')} size = {26} color={'rgba(255, 255, 255, 0.7)'} style={styles.btneye} />
              </TouchableOpacity>
            </View> 

            <TouchableOpacity onPress={this._onPressButton} 
                  style={styles.btnLogin}>
                   <Text style={styles.text} onPress={() => this.onClickListener('Welcome To The Exercise Tracker')}
                    onPress={() => navigate ('Profile')}>Sign Up!</Text>
            </TouchableOpacity> 
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

  signUpContainer: {
    borderRadius:30,
    width:250,
    height:45,
    marginBottom:20,
  },

  input:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    color: 'rgba(255, 255, 255, 0.7)',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },

  logo:{
    width: 256,
    height: 256,
    justifyContent: 'center',
  },

  logoText: {
    color: 'orange',
    fontSize: 34,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 40,
    opacity: 0.5,
  },

  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },

  btnLogin: {
    width: (WIDTH/3),
    height: 45, 
    borderRadius: 45, 
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginBottom: 20,
  },

  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 22, 
    textAlign: 'center',
    paddingTop: 5, 
    
  },
  
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 17,
  },

});
