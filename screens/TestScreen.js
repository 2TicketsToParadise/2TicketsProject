import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, Platform,
  Button, TouchableHighlight, Image,
  Alert, KeyboardAvoidingView, ImageBackground,
  TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import bgImage from '../assets/images/background.png';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalSelector from 'react-native-modal-selector'

export default class SampleApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textInputValue: ''
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

        return (
            <View style={{flex:1, justifyContent:'space-around', padding:50}}>

                {/* // Default mode */}
                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />

                {/* // Wrapper
                <ModalSelector
                //     data={data}
                //     initValue="Select something yummy!"
                //     accessible={true}
                //     scrollViewAccessibilityLabel={'Scrollable options'}
                //     cancelButtonAccessibilityLabel={'Cancel Button'}
                //     onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

                //     <TextInput
                //         style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                //         editable={false}
                //         placeholder="Select something yummy!"
                //         value={this.state.textInputValue} />

                // </ModalSelector>

                {/* //Custom component */}
                {/* <ModalSelector
                    data={data}
                    ref={selector => { this.selector = selector; }}
                    customSelector={<Switch onValueChange={() => this.selector.open()} />}
                /> */}
            </View>
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
    fontSize: 24,
  }
});