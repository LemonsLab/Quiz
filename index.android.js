import AppView from './src/AppView';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import store from './src/store/store'
import {Provider} from 'react-redux'
class PepperoniAppTemplate extends Component {



  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PepperoniAppTemplate', () => PepperoniAppTemplate);
