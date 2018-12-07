import React from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
import bgImage from '../../assets/images/background.png';






export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
        };
    }

    onSignupPress = () => {
        //check that passwords match
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        //signup in Firebase with Email and Password
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);

            });

    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');

    }

    render() {

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>

                <View style={{ padding: 50, alignItems: 'center' }}>
                    <Text style={{ fontSize: 50, color: 'white' }}>Signup</Text>

                    <TextInput style={styles.textInputField}
                        value={this.state.email}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        placeholder="Email"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <View style={{ paddingTop: 10 }} />

                    <TextInput style={styles.textInputField}
                        value={this.state.password}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <View style={{ paddingTop: 10 }} />

                    <TextInput style={styles.textInputField}
                        value={this.state.passwordConfirm}
                        onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <View style={{ paddingTop: 10 }} />

                    <Button title='Signup' onPress={this.onSignupPress} />
                    <View style={{ paddingTop: 10 }} />

                    <Button title='Back to Login' onPress={this.onBackToLoginPress} />

                </View>
            </ImageBackground >
        );



    }
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputField: {
        width: 200,
        height: 40,
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        borderColor: 'white',
        textAlign: 'center',
        borderRadius: 20,

    }

});