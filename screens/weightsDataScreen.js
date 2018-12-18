import React from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { dbCall } from '../constants/dbCall';
import * as firebase from 'firebase';
import { ListItem, List } from 'react-native-elements';


export default class WeightsDataScreen extends React.Component {
    static navigationOptions = {
        title: 'Past Weights Workouts',
        headerTitleStyle: {
            // alignSelf: 'center',
            flex: 1,
            textAlign: 'center',
        },
        headerRight: (<View />)
    };


    constructor(props) {
        super(props);
        this.state = { isLoading: true };

        this.state = {
            uuid: (firebase.auth().currentUser || {}).uid,
            exerciseid: '',
            dataSource: ''
        };
    }

    componentDidMount() {
        var test = 'select * from weights where uuid = \'' + this.state.uuid + '\';';
        // console.log(test);
        return dbCall(test, this, function (responseData, component) {
            // Note: This function will be executed inside of the dbCall function when the API responds with data

            // TODO: Add Safety checks -> length of responseData
            var state = {
                isLoading: false,
                dataSource: responseData
            };

            component.setState(state, function () { });
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
            <List>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.exerciseid}
                            subtitle={`${item.wdate} ${item.weight} 'lbs,' ${item.sets} 'sets,'
                        ${item.reps} ${item.onerepmax}`}
                        />
                    )}
                    keyExtractor={item => item.wdate}
                />
            </List>
        );
    }
}