import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class calendar extends React.Component {
    static navigationOptions = {
        title: 'CalendarScreen',
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Calendar
                    //onDayPress={this.onDayPress}
                    onDayPress ={() => navigate('His')}
                    style={styles.calendar}
                    hideExtraDays
                    markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
                />

            </ScrollView>
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
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
    container: {
        // flex: 1,
        // backgroundColor: 'gray',
        //flexDirection: 'column',
        //justifyContent: 'center',
        //width: 'width',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
    }
});