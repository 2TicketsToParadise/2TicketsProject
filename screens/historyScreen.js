import React from 'react';
import { ImageBackground, Image, Alert,
    StyleSheet, Text, TextInput, View,
    TouchableOpacity, Dimensions, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';


const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends React.Component {

    //Top banner
    static navigationOptions = {
        title: 'historyScreen',
    };
    //Show/Hide password
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        };
    }

    render() {
        //navitgate pages
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>7 Day History</Text>
                {/*This block shows the username input block along with a person symbol next to it*/}
                <View style={styles.calendarContainer}>
                    <Text>Here is where the calendar will go</Text>
                    <View style={styles.dayContainer}>
                        <Text>Day 1</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>Day 2</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>Day 3</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>Day 4</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>Day 5</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>Day 6</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>Day 7</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercise: </Text>
                    </View>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 40,
        backgroundColor: '#aaaaaa',
        textAlign: 'center',
        flex: 1,
        justifyContent: 'flex-start'
    },
    calendarContainer: {
        backgroundColor: '#faca3a',
        flex: 10,
        justifyContent: 'flex-start'
    }
});