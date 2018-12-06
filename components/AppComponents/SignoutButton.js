import React from 'react';
import { View, Text, Button } from 'react-native';
import * as firebase from 'firebase';



export default class SignoutOut extends React.Component {
    onUserPress = () => {
        userId = (firebase.auth().currentUser || {}).uid;
    }
    onSignoutPress = () => {
        firebase.auth().signOut();

    }

    render() {
        return (
            <View>
                <Button title='Signout' onPress={this.onSignoutPress} />
            </View>


        )
    }

}