import React            from 'react';
import {StackNavigator} from 'react-navigation';
import Menu             from './containers/Menu/Menu.js';
import Settings         from './components/Settings/Settings.js';


const AppView = StackNavigator({
    Menu      : { screen: Menu     },
    Settings  : { screen: Settings },
});


export default AppView;