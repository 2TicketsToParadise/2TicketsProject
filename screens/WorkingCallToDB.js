
import React from 'react';
import { Text, View, } from 'react-native';
import { dbCall } from '../constants/dbCall';
import * as firebase from 'firebase';
import SignoutButton from '../components/AppComponents/SignoutButton';



export default class CallTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            weight: '',
            height: '',
            uuid: (firebase.auth().currentUser || {}).uid,
        };
    }


    componentDidMount() {


        return dbCall('select * from users where age = 75;', this, function (responseData, component) {
            // Note: This function will be executed inside of the dbCall function when the API responds with data

            // TODO: Add Safety checks -> length of responseData
            var state = {
                isLoading: false,
                firstName: responseData[0].firstname,
                lastName: responseData[0].lastname,
                age: responseData[0].age,
                weight: responseData[0].weight,
                height: responseData[0].height
            };
            component.setState(state, function () {
            });
        });
    }




    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View>
                <Text> {this.state.firstName}</Text>
                <Text>{this.state.lastName} </Text>
                <Text> Age: {this.state.age} </Text>
                <Text> Weight: {this.state.weight} </Text>
                <Text> Height: {this.state.height} </Text>
                <SignoutButton />

            </View>
        );
    }
}
