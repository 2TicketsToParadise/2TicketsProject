
import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Cell } from 'react-native';

export default class historyScreen extends Component {
    constructor(tables) {
        super(tables);
        this.state = {
            weightsHead: ['Workout', 'Reps', 'Sets', 'Weight'],
            weightsData: [
                //['Bench', '60', '8', '3'],

            ],
            cardioHead: ['Exercise', 'Dist', 'Time', 'Heart Rate'],
            cardioData: [
                //['Run', '1 mile', '10 minutes', '100'],

            ]
        }
    }

    componentDidMount(){
        return fetch('https://twoticketsdatabase.herokuapp.com/',
            {method: 'POST', headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
                body: JSON.stringify({query : 'select * from users where age = 59'}),})

            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }


    render() {
        const state = this.state;
        return (


            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={styles.headers}>{item.lastname}, {item.firstname}, {item.age}</Text>}
                    keyExtractor={({id}, index) => id}
                />



                {/*<Table styles={styles.chart} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>*/}
                    {/*<Row data={state.cardioHead} style={styles.head} textStyle={styles.text}/>*/}
                    {/*<Rows data={state.cardioData} textStyle={styles.text}/>*/}
                {/*</Table>*/}
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 1 },
    headers: { fontSize: 50, },
});


