import React from 'react';
import { ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';

//import { TestComponent } from './../components/AppComponents';
import bgImage from '../assets/images/background.png';
import exerImage from '../assets/images/bicep.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
  
  //Top banner
  static navigationOptions = {
    title: 'bicepCurl',
  };
  //Show/Hide password
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    };
    state = {
      reps: '',
      sets: '',
    };

  }

  onClickListener = (viewId) => {
    // console.log(this.state.userName);
    // console.log(this.state.password);

    Alert.alert("Congratulations", "You've just recorded "+this.state.sets+" sets of "+this.state.reps+" for the "+viewId);
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
        {/*This block shows words workour tracker with image of buff guy underneath, at top of screen*/}
          <View style = {styles.container}>
            <View style = {styles.logoContainer}>
              <Text style = {styles.logoText}>Bicep Curl</Text>
              <Image source={exerImage} style={styles.exerImage}>
              </Image>
              
            </View>
            {/*This block shows the username input block along with a person symbol next to it*/}
            <View style={styles.inputContainer}>
              {/* <View style={{paddingBottom: 10}}> */}
                    {/* Platform.OS === 'ios' ? something : andriodSomething */}
              <Icon name= {'md-person'}
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

            {/*This block shows the password input block along with a lock symbol before it and eye afterwards (the eye is button to show/hide password*/}
            <View style={styles.inputContainer}>
              {/* Platform.OS === 'ios' ? something : andriodSomething */}
              <Icon name= {'md-lock'}
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
                <Icon name = {this.state.press == false ? ('md-eye') : ('md-eye-off')} size = {26} color={'rgba(255, 255, 255, 0.7)'} style={styles.btneye} />
              </TouchableOpacity>
            </View> 

            {/*This block makes a button with create account text*/}
            {/* Create Account navigate */}
            <View style= {styles.signUpContainer}>
              <Text style= {styles.text} onPress={() => navigate('SignUp')}>
              Create an account!</Text> 
            </View>
            
            {/*This block has a grey oval (from "styleSheet) and then puts word login, I moved the button from being the words login to the actual circle*/}
            <TouchableOpacity onPress={this._onPressButton} 
                  style={styles.btnLogin}  onPress={() => this.onClickListener('Bicep Curl')}>
                  
                  <Text style={styles.text} >Log Workout</Text>
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

  exerImage:{
    width: 256,
    height: 200,
    justifyContent: 'center',
    resizeMode: 'contain'
  },

  logoText: {
    color: 'white',
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
    borderRadius: 50, 
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