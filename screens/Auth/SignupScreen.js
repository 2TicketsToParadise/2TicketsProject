import React from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert,
} from 'react-native';
import * as firebase from 'firebase';



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
            <View style={{ padding: 50, alignItems: 'center' }}>
                <Text>Signup</Text>

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    placeholder="Email"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <View styele={{ paddingTop: 10 }} />

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <View styele={{ paddingTop: 10 }} />

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />

                <Button title='Signup' onPress={this.onSignupPress} />
                <Button title='Back to Login' onPress={this.onBackToLoginPress} />

            </View>
        );



    }
}


const styles = StyleSheet.create({

});