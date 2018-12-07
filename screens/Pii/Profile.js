import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import dbCall from '../../constants/dbCall';



export default class CallTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      weight: '',
      height: '',
      uuid: (firebase.auth().currentUser || {}).uid,
    };
  }


  componentDidMount() {
    return dbCall('select * from users where age = 29;', function (responseData) {
      // Note: This function will be executed inside of the dbCall function when the API responds with data

      // TODO: Add Safety checks -> length of responseData
      var state = {
        isLoading: false,
        firstName: responseData[0].firstName,
        lastName: responseData[0].lastName,
        age: responseData[0].age,
        weight: responseData[0].weight,
        height: responseData[0].height
      };
      this.setState(state, function () {

      });





      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies
          }, function () { });
        })
        .catch((error) => {
          console.error(error);
        });

    });
  }


  // <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
  // source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>


  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Icon name={'md-person'} style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28} />
                <TextInput style={styles.inputs}
                  placeholder="First Name"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  onChangeText={(text) => { this.setState({ firstName: text }) }}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name={'md-person'} style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28} />
                <TextInput style={styles.inputs}
                  placeholder="Last Name"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  onChangeText={(text) => { this.setState({ lastName: text }) }}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name={'md-person'}
                  style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28} />
                <TextInput style={styles.inputs}
                  placeholder="Age"
                  underlineColorAndroid='transparent'
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  onChangeText={(text) => { this.setState({ age: text }) }}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name={'md-person'}
                  style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28} />
                <TextInput style={styles.inputs}
                  placeholder="Weight"
                  underlineColorAndroid='transparent'
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  onChangeText={(text) => { this.setState({ weight: text }) }}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name={'md-person'}
                  style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28} />
                <TextInput style={styles.inputs}
                  placeholder="Height"
                  underlineColorAndroid='transparent'
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  onChangeText={(text) => { this.setState({ height: text }) }}
                />
              </View>

              {/* <View style={styles.inputContainer}>
                <Icon name={'md-person'} style={styles.inputIcon} color={'rgba(255, 255, 255, 0.7)'} size={28} />
                <Picker
                  selectedValue={this.state.gender}
                  onValueChange={gender => this.setState({ gender })}
                  style={{ color: 'rgba(255, 255, 255, 0.7)', width: 260 }}
                  mode="dropdown">
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View> */}



              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
                <Text style={styles.signUpText}>Sign up</Text>
              </TouchableHighlight>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#00b5ec',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: 'rgba(255, 255, 255, 0.7)',

  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#rgba(255, 255, 255, 0.8)',
  },
  signUpText: {
    color: 'black',
    fontSize: 24,
  }
});