import React from 'react';
import { ImageBackground, Image, Alert,
  StyleSheet, Text, TextInput, View, 
  TouchableOpacity, Dimensions, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, Switch, Platform} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import {dbCall} from '../constants/dbCall';
import * as firebase from 'firebase';

 

import bgImage from '../assets/images/background.png';
import exerImage from '../assets/images/dumbbell.png';

const { width: WIDTH } = Dimensions.get('window')

export default class weightLifting extends React.Component {
  
  //Top banner
  static navigationOptions = {
    title: 'weightLifting',
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: (firebase.auth().currentUser || {}).uid,
      exerciseId: null,
      reps: '',
      sets: '',
      weight: '',
      textInputValue: '',
      onerepmax: null,
    };

  }
  
  onClickListener = (viewId) => {
    if (this.state.reps > 0 && this.state.sets > 0 && this.state.weight > 0 && this.state.textInputValue != ''){
        Alert.alert("Congratulations", "You've just recorded "+this.state.sets+" sets of "+this.state.reps+" at "+this.state.weight+" pounds for the "+viewId);
        
        exerciseid=viewId;

        var test = 'insert into weights (UUID, exerciseid, wdate, sets, reps, weight, onerepmax) values (\''+ this.state.uuid+ '\',\''+this.state.exerciseid+'\',current_timestamp,'+this.state.sets+','+this.state.reps+','+this.state.weight+','+this.state.onerepmax+');';
        console.log(test);
        this.setState({reps: ''});
        this.setState({sets: ''});
        this.setState({weight: ''});
        this.setState({textInputValue: ''});
        return dbCall(test,this, function( responseData,component ){});
    }
    else{
        Alert.alert("You didn't enter all of you workout info!");
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    let index = 0;
    const data = [
        { key: index++, section: true, label: 'Weight Lifting Options' },
        { key: index++, label: 'Squat' },
        { key: index++, label: 'Bench Press' },
        { key: index++, label: 'DeadLift' },
        { key: index++, label: 'Military Press' },
        { key: index++, label: 'Weighted Dips' },
        { key: index++, label: 'Weighted Pullups' },
        { key: index++, label: 'Bicep Curls' },
        { key: index++, label: 'Tricep Extensions' },
        { key: index++, label: 'Dumbbell Shoulder Press' },
        { key: index++, label: 'Bent-Over Rows' },
        { key: index++, label: 'Lat Pull-Downs' },
        { key: index++, label: 'Seated Cable Rows' },
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
                            placeholder="Select Workout"
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            value={this.state.textInputValue}
                        />
                    </ModalSelector>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Reps Per Set'}
                        keyboardType='number-pad'
                        returnKeyType= 'done'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(reps) => this.setState({reps})}
                        value = {this.state.reps}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'# of Sets'}
                        keyboardType='number-pad'
                        returnKeyType= 'done'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(sets) => this.setState({sets})}
                        value = {this.state.sets}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Weight (lbs)'}
                        keyboardType='number-pad'
                        returnKeyType= 'done'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(weight) => this.setState({weight})}
                        value = {this.state.weight}
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