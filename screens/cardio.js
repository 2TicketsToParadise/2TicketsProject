import React from 'react';
import { ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Switch, Platform} from 'react-native';
import ModalSelector from 'react-native-modal-selector'

 
//import { TestComponent } from './../components/AppComponents';
import bgImage from '../assets/images/background.png';
import exerImage from '../assets/images/dumbbell.png';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
  
  //Top banner
  static navigationOptions = {
    title: 'Cardio',
  };

  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      duration: '',
      heartRate: '',
      textInputValue: '',
    };

  }
  
  onClickListener = (viewId) => {
    if (this.state.distance > 0 && this.state.duration > 0 && this.state.heartRate > 0 && this.state.textInputValue != ''){
        Alert.alert("Congratulations", "You've just recorded "+this.state.duration+" sets of "+this.state.distance+" at "+this.state.heartRate+" pounds for the "+viewId);
        //add code for adding data to db and probably a screen change if we want?
    }
    else{
        Alert.alert("You didn't enter all of you workout info!")
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    let index = 0;
    const data = [
        { key: index++, section: true, label: 'Cardio Options' },
        { key: index++, label: 'Rowing' },
        { key: index++, label: 'Stair Climber' },
        { key: index++, label: 'Running' },
        { key: index++, label: 'Jogging' },
        { key: index++, label: 'Hiking' },
        { key: index++, label: 'Skiing' },
        { key: index++, label: 'Football' },
        { key: index++, label: 'Basketball' },
    ];

    return (
    
    <ImageBackground source={bgImage} style = {styles.backgroundContainer}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <TouchableWithoutFeedback style = {styles.container} onPress={Keyboard.dismiss}>
            <View style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Text style = {styles.text}>Fill Out Workout Info</Text>
                    <Image source={exerImage} style={styles.exerImage}/>
                </View>
                <View style={styles.inputContainer}>
                    <ModalSelector
                        data={data}
                        accessible={true}
                        scrollViewAccessible={true}
                        scrollViewAccessibilityLabel={'Scrollable options'}
                        cancelButtonAccessibilityLabel={'Cancel Button'}
                        onChange={(option)=>{ this.setState({textInputValue:option.label})}}
                    >
                        <TextInput
                            style={styles.input}
                            editable={false}
                            placeholder="Select Activity"
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            value={this.state.textInputValue}
                        />
                    </ModalSelector>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Distance Traveled'}
                        keyboardType='number-pad'
                        returnKeyType= 'done'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(distance) => this.setState({distance})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder={'Duration of Workout'}
                    keyboardType='number-pad'
                    returnKeyType= 'done'
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    onChangeText={(duration) => this.setState({duration})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Heart Rate'}
                        keyboardType='number-pad'
                        returnKeyType= 'done'
                        placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(heartRate) => this.setState({heartRate})}
                    />
                </View>
                <TouchableOpacity
                    onPress={this._onPressButton} 
                    style={styles.btnLog}
                    onPress={() => this.onClickListener(this.state.textInputValue)}
                >  
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

  input:{
    height:45,
    marginLeft:16,
    width: 250,
    borderBottomColor: '#FFFFFF',
    justifyContent:'space-around',
    color: 'rgba(255, 255, 255, 0.7)',
  },

  logoContainer: {
    padding: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },

  exerImage:{
    width: 256,
    height: 180,
    marginTop: 25,
    justifyContent: 'center',
    resizeMode: 'contain',
    opacity: .8,
  },

  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnLog: {
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
});




