import React from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

export default class FirebaseUid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: (firebase.auth().currentUser || {}).uid,

        }
    }


    render() {
        return (
            <View>
                <Text>{this.state.userId}</Text>

            </View>


        )
    }

}