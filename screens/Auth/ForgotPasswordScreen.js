import React from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert,
} from 'react-native';
import * as firebase from 'firebase';


export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    //send firebase "forgot password" email
    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then (() => {
                Alert.alert("Password reset email has been sent.");

            }, (error) => {
                Alert.alert(error.message);
            });

    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');

    }

    render() {
        return (
            <View style={{ padding: 50, alignItems: 'center' }}>

                <Text>Forgot Password</Text>
                <TextInput style={{ width: 200, height: 40, borderWidth: 1, }}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    placeholder= 'john.doe@email.com'
                    keyboardType= 'email-address'
                />


                <Button title='Reset Password' onPress={this.onResetPasswordPress} />
                <Button title='Back to Login' onPress={this.onBackToLoginPress} />


            </View>
        );
    }
}


const styles = StyleSheet.create({

});