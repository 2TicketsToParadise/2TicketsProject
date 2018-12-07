import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class UserInfo extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://twoticketsdatabase.herokuapp.com/', 
    {method: 'POST', headers: {Accept: 'application/json', 
    'Content-Type': 'application/json',}, body: JSON.stringify({query : 'select * from users'}),})
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



  render(){
   console.log([1, 2, 3])
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{flex: 1, paddingTop:20}} >
        <FlatList
        
          data={this.state.dataSource}
          renderItem={({item, }) => <Text>{item.lastname}, {item.firstname}, {item.age}, {item.height}, {item.weight}, {item.gender}, {item.uui}</Text>}
          keyExtractor={({id}, index) => id}
        />
        <Text></Text>
      </View>
    );
  }
}