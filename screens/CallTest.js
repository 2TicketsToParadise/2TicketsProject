import React from 'react';
import { Text, View, } from 'react-native';



export default class CallTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          age: '',
          weight: '', 
          height: '', 
          uuid: '',
        };
    }


    render() {
        return (
            <View>
                <Text> Hello, {this.props.firstName} {this.props.lastName} </Text>
                <Text> Age: {this.props.age} </Text>
                <Text> Weight: { this.props.weight} </Text>
                <Text> Height: { this.props.height} </Text>
            </View>
        )

    }
}
