import React from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground,
} from 'react-native';
import * as firebase from 'firebase';
import bgImage from '../../assets/images/background.png';




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
            .then(() => {
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
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>

                <View style={{ padding: 50, alignItems: 'center' }}>

                    <Text style={{ fontSize: 50, color: 'white' }}>Forgot Password</Text>
                    <TextInput style={styles.textInputField}
                        value={this.state.email}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        placeholder='john.doe@email.com'
                        keyboardType='email-address'
                    />
                    <View style={{ paddingTop: 10 }} />
                    <Button title='Reset Password' onPress={this.onResetPasswordPress} />
                    <View style={{ paddingTop: 10 }} />

                    <Button title='Back to Login' onPress={this.onBackToLoginPress} />


                </View>
            </ImageBackground>
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