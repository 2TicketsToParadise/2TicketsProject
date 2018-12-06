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
