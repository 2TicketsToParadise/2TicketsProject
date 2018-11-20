import React from 'react';
import { ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard} from 'react-native';

import { Platform } from 'react-native';
//import { TestComponent } from './../components/AppComponents';
import bgImage from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
  
  //Top banner
  static navigationOptions = {
    title: 'Login',
  };
  //Show/Hide password
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
    state = {
      userName: '',
      password: '',
    }

  }

  onClickListener = (viewId) => {
    console.log(this.state.userName);
    console.log(this.state.password);

    Alert.alert("Alert", "Button pressed "+viewId);
  }

  // //
  // onPress(){
  //   console.log('Clicked Sign Up')
  // }

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
          <View style = {styles.logoContainer}>
            <View style = {styles.logoContainer}>
              <Text style = {styles.logoText}>Workout Tracker</Text>
              <Image source={logo} style={styles.logo}>
              </Image>
              
            </View>
            <View style={styles.infoContainer}>
              <View style={{paddingBottom: 10}}>
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
              <View style={{}}>
                        {/* Platform.OS === 'ios' ? something : andriodSomething */}
                <Icon name= {Platform.OS === 'ios' ? 'ios-lock-outline' : 'md-lock'} 
                  size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                  style={styles.inputIcon}/>

                <TextInput 
                  style={styles.input}
                  placeholder={'Password'}
                  returnKeyType='go'
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
      {/* Create Account navigate */}
              <Text style= {styles.signUp} onPress={() => navigate('Test')}>
              Create an account!</Text> 
            </View>

            <TouchableOpacity onPress={this._onPressButton} 
                  style={styles.btnLogin}>
                   <Text style={styles.text} onPress={() => this.onClickListener('Login')}>Login</Text>
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
    flexDirection: 'column',
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

  infoContainer: {
    width: WIDTH,
    left: 0,
    right: 0,
    bottom: 0,
    height: 200, 
    padding:20,
  },

  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  input: {
    height: 45, 
    borderRadius: 45, 
    fontSize: 16, 
    paddingLeft: 45, 
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25, 

  },

  inputIcon: {
    position: 'absolute',
    top: 10, 
    left: 35,
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
    right: 37,
  },

  signUp: {
    width: WIDTH/2,
    left: WIDTH-250,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    paddingTop: 15, 
    paddingRight: 35,
    textAlign: 'right',
    alignSelf: 'stretch',
    marginTop: 10,
  },

});
