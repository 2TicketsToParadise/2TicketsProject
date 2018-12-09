import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View, TouchableOpacity, Dimensions, ImageBackground
} from 'react-native';
import bgImage from "../assets/images/background.png";

const { width: WIDTH } = Dimensions.get('window')

export default class calendar extends React.Component {
    static navigationOptions = {
        title: 'See Your Past Workouts',
        headerTitleStyle: {
            // alignSelf: 'center',
            flex: 1,
            textAlign: 'center',
        },
        headerRight: (<View />)
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    <TouchableOpacity onPress={this._onPressButton}
                        style={styles.btnLogin} onPress={() => navigate('cDS')}>

                        <Text style={styles.text} >Past Cardio Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressButton}
                        style={styles.btnLogin} onPress={() => navigate('wDS')}>

                        <Text style={styles.text} >Past Weights Data</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
    },
    btnLogin: {
        width: (WIDTH / 2),
        height: 45,
        borderRadius: 45,
        backgroundColor: 'rgba(70, 70, 70, 0.7)',
        marginBottom: 20,
    },
    text: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 5,

    },
});