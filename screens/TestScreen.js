//moved CallTest.js to test screen for easier testing 


//TypeError: TypeError: TypeError: Object is not a function (near '...(0, _dbCall.default)...')
//occurs when code is ran


//UserInfo.js returns a "non-fatal" error: Warning: Each child in an array or iterator should have a unique "key" prop.%s%s 
//See https://fb.me/react-warning-keys for more information.%s, which causes loading of infor to be slow

import React from 'react';
import { Text, View, } from 'react-native';
import dbCall from '../constants/dbCall';



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
            uuid: '',
        };
    }


    componentDidMount() {
        return dbCall('select * from users where age = 29;', function (responseData) {
            // Note: This function will be executed inside of the dbCall function when the API responds with data

            // TODO: Add Safety checks -> length of responseData
            var state = {
                isLoading: false,
                firstName: responseData[0].firstName,
                lastName: responseData[0].lastName,
                age: responseData[0].age,
                weight: responseData[0].weight,
                height: responseData[0].height
            };
            this.setState(state, function () {

            });





            return fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.movies
                    }, function () { });
                })
                .catch((error) => {
                    console.error(error);
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
                <Text> Hello, {this.state.firstName} {this.state.lastName} </Text>
                <Text> Age: {this.state.age} </Text>
                <Text> Weight: {this.state.weight} </Text>
                <Text> Height: {this.state.height} </Text>
            </View>
        );
    }
}




// import React, { Component } from 'react';
// import {
//   StyleSheet, Text, View, Button, 
// } from 'react-native';
// import * as firebase from 'firebase';
// import TestComponent from '../components/AppComponents/TestComponent';
// import dbCall from '../constants/dbCall';
// import { FirebaseUid } from '../components/AppComponents/FirebaseUid';
// import SignoutButton from '../components/AppComponents/SignoutButton';



// export default class SignUpView extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       userId: (firebase.auth().currentUser || {}).uid,
//     }
//   }



//   //Firebase Logout
//   onSignoutPress = () => {
//     firebase.auth().signOut();

//   }
//   //Show Firebase uid
//   onUserPress = () => {
//     userId = (firebase.auth().currentUser || {}).uid;
//     console.log(userId)
//   }



//   render() {


//     return (


//       <View style={styles.container}>
        
//         <SignoutButton />
//         <Text>Test Screen</Text>
//         {/* show the TestComponent */}
//         <TestComponent />
//         <Text>{this.state.userId}</Text>
        
//         <Button title='Signout' onPress={this.onSignoutPress} />
//         <Button title='User' onPress={this.onUserPress} />

//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#888'
//   },
  
// });