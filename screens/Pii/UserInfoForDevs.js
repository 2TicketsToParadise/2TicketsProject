//Spits out all users
//Testing page for database
//Not part of the Working App
//For Dev checks only
import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { ListItem, List } from 'react-native-elements';

export default class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://twoticketsdatabase.herokuapp.com/',
            {
                method: 'POST', headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({ query: 'select * from users' }),
            })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,

                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderHeader = () => {
        const {navigate} = this.props.navigation;
        return(
        <View>
            <TouchableOpacity onPress={this._onPressButton}
                style={styles.btnLogin}>
                <Text style={styles.text} onPress={() => this.onClickListener('Welcome To The Exercise Tracker')}
                    onPress={() => navigate('Profile')}>Sign Up!</Text>
            </TouchableOpacity>
        </View>
         )};

    render() {
        
        console.log([1, 2, 3])
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
                            title={item.uuid}
                            subtitle={`${item.lastname} ${item.firstname} ${item.age} ${item.height} ${item.weight} ${item.gender} ${item.uui}`}
                        />
                    )}
                    keyExtractor={item => item.uuid}
                    ListHeaderComponent={this.renderHeader}
                />

            </List>

        );

    }
}
const styles = StyleSheet.create({
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 22, 
        textAlign: 'center',
        paddingTop: 5, 
        
      },
});