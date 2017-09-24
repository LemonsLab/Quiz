import React            from 'react';
import {StackNavigator} from 'react-navigation';
import MenuCard             from './containers/MenuContainer/Menu.js';
import Settings         from './components/Settings/Settings.js';

let elo = "fefef"
const AppView = StackNavigator({
    Menu      : { screen: MenuCard ,
        navigationOptions:{
        header:()=> null
        }},
    Settings  : { screen: Settings },
});


export default AppView;