import React from 'react';
import { FlatList,Text, View, ActivityIndicator } from 'react-native';
import {dbCall} from '../constants/dbCall';

export default class CallTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };

        this.state = {
            uuid: 'wlkdjflsdkfjdsfic',
            exerciseid: '',
            dataSource:''
        };
    }

    componentDidMount() {
        var test = 'select * from weights where uuid = \''+this.state.uuid+'\';' ;
        console.log(test);
        return dbCall(test,this, function( responseData,component ) {
            // Note: This function will be executed inside of the dbCall function when the API responds with data

            // TODO: Add Safety checks -> length of responseData
            var state = {
                isLoading: false,
                dataSource: responseData
            };

            component.setState(state, function() {});
        });

    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.wdate}, {item.exerciseid}, {item.weight} lbs, {item.sets} sets,
                        {item.reps} reps, {item.onerepmax} One Rep Max</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}