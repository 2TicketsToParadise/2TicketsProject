
import { ImageBackground, Image, Alert,
    StyleSheet, Text, TextInput, View,
    TouchableOpacity, Dimensions, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';

import * as React from 'react';

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

        return (
            <View style={styles.container}>
                <Text style={styles.title}>7 Day History</Text>
                <View style={styles.calendarContainer}>
                    <Text>Here is where the calendar will go</Text>
                    <View style={styles.dayContainer}>
                        <Text>1 Day Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>2 Days Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>3 Days Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>4 Days Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>5 Days Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>6 Days Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
                    </View>
                    <View style={styles.dayContainer}>
                        <Text>7 Days Ago</Text>
                        <Text>Workout Type: </Text>
                        <Text>Exercises: </Text>
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
    // paragraph: {
    //     margin: 24,
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
    title: {
        fontSize: 40,
        backgroundColor: '#aaaaaa',
        textAlign: 'center',
        flex: 1,
        justifyContent: 'flex-start'
    },
    calendarContainer: {
        backgroundColor: '#ffffff',
        flex: 10,
        justifyContent: 'flex-start'
    },
    dayContainer: {
        fontSize: 20,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        flex: 2,
        justifyContent: 'flex-start'
    }
});