import React from 'react';
import { ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Switch, Platform} from 'react-native';
  import ModalSelector from 'react-native-modal-selector'

 
//import { TestComponent } from './../components/AppComponents';
import bgImage from '../assets/images/background.png';
import exerImage from '../assets/images/bicep.png';
import Icon from 'react-native-vector-icons/Ionicons';
import bell from '../assets/images/dumbbell.png';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
  
  //Top banner
  static navigationOptions = {
    title: 'bicepCurl',
  };

  constructor() {
    super()
    state = {
      reps: '',
      sets: '',
      weight: '',
      textInputValue: '',
    };

  }
  
  onClickListener = (viewId) => {
    if (this.state.reps > 0 && this.state.sets > 0 && this.state.weight > 0){
        Alert.alert("Congratulations", "You've just recorded "+this.state.sets+" sets of "+this.state.reps+" at "+this.state.weight+" pounds for the "+viewId);
        //add code for adding data to db and probably a screen change if we want?
    }
    else{
        Alert.alert("You didn't enter all of you workout info!")
    }
  }

  render() {
    let index = 0;
        const data = [
            { key: index++, section: true, label: 'Fruits' },
            { key: index++, label: 'Red Apples' },
            { key: index++, label: 'Cherries' },
            { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
        ];
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
            <View style={{flex:1, justifyContent:'space-around', padding:50}}>


                {/* // Default mode
                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} /> */}

                {/* // Wrapper */}
                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}
                    >

                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                        editable={false}
                        placeholder="Select something yummy!"
                        //value={this.state.textInputValue}
                         />

                </ModalSelector>

                {/* // Custom component */}
                {/* <ModalSelector
                    data={data}
                    ref={selector => { this.selector = selector; }}
                    customSelector={<Switch onValueChange={() => this.selector.open()} />}
                /> */}
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
                placeholder={'Reps Per Set'}
                keyboardType='number-pad'
                returnKeyType='next'
                autoCorrect= {false}
                autoCapitalize='none'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                underlineColorAndroid='transparent'
                onChangeText={(reps) => this.setState({reps})}
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
                placeholder={'# of Sets'}
                keyboardType='number-pad'
                returnKeyType='go'
                autoCorrect={false}
                autoCapitalize='none'
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
                onChangeText={(sets) => this.setState({sets})}
              />
            </View>
            {/*This block shows the weights input block along with a person symbol next to it*/}
            <View style={styles.inputContainer}>
              {/* <View style={{paddingBottom: 10}}> */}
                    {/* Platform.OS === 'ios' ? something : andriodSomething */}
              <Image source={bell} 
                size= {28} color={'rgba(255, 255, 255, 0.7)'} 
                style={styles.inputIcon}/>
              <TextInput 
                style={styles.input}
                placeholder={'Weight (lbs)'}
                keyboardType='number-pad'
                returnKeyType='next'
                autoCorrect= {false}
                autoCapitalize='none'
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                underlineColorAndroid='transparent'
                onChangeText={(weight) => this.setState({weight})}
              />
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
    height: 180,
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
    marginBottom: 15,
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
    width: (WIDTH/2.5),
    height: 40, 
    borderRadius: 60, 
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