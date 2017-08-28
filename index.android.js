import AppView from './src/AppView';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {NavigationActions} from 'react-navigation';

class PepperoniAppTemplate extends Component {



  render() {
    return (

        <AppView />

    );
  }
}

AppRegistry.registerComponent('PepperoniAppTemplate', () => PepperoniAppTemplate);
