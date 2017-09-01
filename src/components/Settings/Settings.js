import React, { Component } from 'react';
import {
        Text,
        View
        } from 'react-native';


class Settings extends Component{

  static navigationOptions = {
    title: 'Ustawienia',
    header: null
  };

  render(){
    const { navigate } = this.props.navigation;

    return(
      <View>
        <Text>next page</Text>
      </View>
    );
  }
}

export default Settings