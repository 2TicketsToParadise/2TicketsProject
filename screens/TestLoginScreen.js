import React from 'react';
import {
  ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, Button, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { FormLabel, FormInput, FormVailidationMessage } from 'react-native-elements';

import { Platform } from 'react-native';
//import { TestComponent } from './../components/AppComponents';
import bgImage from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
//import ApiKeys from '../constants/ApiKeys';

const { width: WIDTH } = Dimensions.get('window')





export default class LoginScreen extends React.Component {

  //Top banner
  static navigationOptions = {
    title: 'Workout Tracker',
    headerStyle: {

    },
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
    }
  };
  //Show/Hide password
  constructor(props) {
    super(props)
    this.state = {
      showPass: true,
      press: false,
      email: '', password: '', error: '', loading: false };

  }

  

//   onLoginPress() {
//     this.setState({ error: '', loading: true });

//     const { email, password } = this.state;
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(() => {
//         this.setState({ error: '', loading: false });
//         this.props.navigation.navigate('Home');
//       })
//       .catch(() => {
//         this.setState({ error: 'Authentication failed', loading: false });
//       })
//   }
//   onSignUpPress() {
//     this.setState({ error: '', loading: true });

//     const { email, password } = this.state;
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         this.setState({ error: '', loading: false });
//         this.props.navigation.navigate('Home');
//       })
//       .catch(() => {
//         this.setState({ error: 'Authentication failed', loading: false });
//       })
//   }

  onClickListener = (viewId) => {
    console.log(this.state.userName);
    console.log(this.state.password);

    Alert.alert("Alert", "Button pressed " + viewId);
  }

  //
  onPress(){
    console.log('Clicked Sign Up')
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

//   renderButtonOrLoading() {
//     if (this.state.loading) {
//       return <Text> Loading </Text>
//     }
//     return <View>
//       <Button
//         onPress={this.onLoginPress.bind(this)}
//         title='Login'/>
//       <Button
//         onPress={this.onSignUpPress.bind(this)}
//         title='Sign Up'/>
//     </View> 
//   }


  render() {
    //navitgate pages
    const { navigate } = this.props.navigation;

    return (

    //   <View>
    //     <FormLabel>Email</FormLabel>
    //     <FormInput 
    //     value= {this.state.email}
    //     placeholder= ' Name@place.com '
    //     onChangeText={email => this.setState({email})}/>
    //     <FormLabel>Password</FormLabel>
    //     <FormInput 
    //     value={this.state.password}
    //     secureTextEntry
    //     placeholder='********'
    //     onChangeText={password => this.setState({password})}/>
    //     {this.renderButtonOrLoading()}

    //     <Text>{this.state.error}</Text>
    //   </View>


      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Workout Tracker</Text>
                <Image source={logo} style={styles.logo}>
                </Image>

              </View>

              <View style={styles.inputContainer}>
                {/* <View style={{paddingBottom: 10}}> */}
                {/* Platform.OS === 'ios' ? something : andriodSomething */}
                <Icon name={Platform.OS === 'ios' ? 'ios-person-outline' : 'md-person'}
                  size={28} color={'rgba(255, 255, 255, 0.7)'}
                  style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder={'Username'}
                  keyboardType='email-address'
                  returnKeyType='next'
                  autoCorrect={false}
                  autoCapitalize='none'
                  placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({ email })}
                />
              </View>

              <View style={styles.inputContainer}>
                {/* Platform.OS === 'ios' ? something : andriodSomething */}
                <Icon name={Platform.OS === 'ios' ? 'ios-lock-outline' : 'md-lock'}
                  size={28} color={'rgba(255, 255, 255, 0.7)'}
                  style={styles.inputIcon} />

                <TextInput
                  style={styles.input}
                  placeholder={'Password'}
                  returnKeyType='go'
                  autoCorrect={false}
                  autoCapitalize='none'
                  secureTextEntry={this.state.showPass}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({ password })}
                />
                {/* Show/Hide password */}
                <TouchableOpacity onPress={this._onPressButton} onPress={this.showPass.bind(this)} style={styles.btnEye}>
                  {/* Platform.OS === 'ios' ? something : andriodSomething */}
                  <Icon name={this.state.press == false ? (Platform.OS === 'ios' ? 'ios-eye-outline' : 'md-eye') : (Platform.OS === 'ios' ? 'ios-eye-off-outline' : 'md-eye-off')} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.btneye} />
                </TouchableOpacity>
              </View>

              {/* Create Account navigate */}
              <View style={styles.signUpContainer}>
                <Text style={styles.text} onPress={() => navigate('SignUp')}>
                  Create an account!</Text>
              </View>

              <TouchableOpacity onPress={this._onPressButton}
                style={styles.btnLogin}>
                <Text style={styles.text} onPress={() => firebase.auth().signOut()}>Logout</Text>
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
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  signUpContainer: {
    borderRadius: 30,
    width: 250,
    height: 45,
    marginBottom: 20,
  },

  input: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: 'rgba(255, 255, 255, 0.7)',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },

  logo: {
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

  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },

  btnLogin: {
    width: (WIDTH / 3),
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
