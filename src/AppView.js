import React            from 'react';
import Test from './components/Test/Test';
import Settings         from './containers/Settings/Settings.js';
import YourTests        from './components/YourTests/YourTests.js';
import YourTestViewContainer     from './containers/YourTestViewContainer/YourTestViewContainer.js';
import Menu from './containers/Menu/Menu'
import ResultsWindow    from './components/ResultsWindow/ResultsWindow.js';
import {  StackNavigator } from 'react-navigation';
const AppView = StackNavigator({
    Menu      : {screen: Menu ,
        navigationOptions: ({navigation}) => ({
            header:() => null
        })},
    Settings      : { screen: Settings,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.name,
        })},
    Test          : { screen: Test ,navigationOptions: ({navigation}) => ({
        title: navigation.state.params.name,
    })},
    YourTests     : { screen: YourTests,  navigationOptions: ({navigation}) => ({
        title: navigation.state.params.name,
    })},

    ResultsWindow : { screen: ResultsWindow ,  navigationOptions: ({navigation}) => ({
        title: navigation.state.params.name,
    })},
    YourTestViewContainer: {screen: YourTestViewContainer,  navigationOptions: ({navigation}) => ({
        title: navigation.state.params.name,
    })},

});


export default AppView;