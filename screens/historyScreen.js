import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class historyScreen extends Component {
    constructor(weights) {
        super(weights);
        this.state = {
            weightsHead: ['Area', 'Lift', 'Weight', 'Reps', 'Sets'],
            weightsData: [
                ['Chest', 'Bench', '60', '8', '3'],
                ['Chest', 'Bench', '60', '8', '3'],
                ['Chest', 'Bench', '60', '8', '3'],
                ['Chest', 'Bench', '60', '8', '3'],
                ['Chest', 'Bench', '60', '8', '3'],
            ],
            cardioHead: ['Exercise', 'Dist', 'Time'],
            cardioData: [
                ['Run', '1 mile', '10 minutes'],
                ['Swim', '30 laps', '20 minutes'],
                ['Stairs', '200 stairs', '10 minutes'],
            ]
        }
    }


    render() {
        const state = this.state;
        return (
            <View style={styles.container}>

                <Text style = {styles.headers}>Weights</Text>
                <Table styles={styles.chart} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.weightsHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.weightsData} textStyle={styles.text}/>
                </Table>

                <Text style = {styles.headers}>Cardio</Text>
                <Table styles={styles.chart} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.cardioHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.cardioData} textStyle={styles.text}/>
                </Table>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    headers: { fontSize: 50, },
});





