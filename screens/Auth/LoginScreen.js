import React from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert,
    ImageBackground, Image, TouchableOpacity, Dimensions,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,

} from 'react-native';
import * as firebase from 'firebase';
import bgImage from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { withClientState } from 'apollo-link-state';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPass: true,
            press: false,
        };
    }


    //login with Firebase
    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            });

    }

    onCreateAccountPress = () => {

        this.props.navigation.navigate('Signup');
    }

    onForgotPasswordPress = () => {

        this.props.navigation.navigate('ForgotPassword');
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }


    render() {

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>

                <View style={{ padding: 50, alignItems: 'center' }}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo}>
                        </Image>
                        <Text style={styles.logoText}>Workout Tracker</Text>

                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-person'}
                            size={28} color={'rgba(255, 255, 255, 0.7)'}
                            style={styles.inputIcon} />
                        < TextInput style={styles.input}
                            value={this.state.email}
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            placeholder="Email"
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='next'


                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'md-lock'}
                            size={28} color={'rgba(255, 255, 255, 0.7)'}
                            style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            value={this.state.password}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            placeholder="Password"
                            secureTextEntry={true}
                            autoCapitalize='none'
                            autoCorrect={false}

                        />
                        <TouchableOpacity onPress={this._onPressButton} onPress={this.showPass.bind(this)} style={styles.btnEye}>

                            <Icon name={this.state.press == false ? ('md-eye') : ('md-eye-off')} size={26} color={'rgba(255, 255, 255, 0.7)'} style={styles.btneye} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Button title='Login' onPress={this.onLoginPress} />
                        <View style={{ paddingTop: 10 }} />
                        <Button title='Create account' onPress={this.onCreateAccountPress} />
                        <View style={{ paddingTop: 10 }} />
                        <Button title='Forgot Password' onPress={this.onForgotPasswordPress} />
                    </View>

                </View>
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
        
    },

    logo: {
        width: 256,
        height: 256,
        justifyContent: 'center',
    },

    logoText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '500',
        opacity: 0.9,
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