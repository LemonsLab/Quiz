import React            from 'react';
import Test from './components/Test/Test';
import Settings         from './components/Settings/Settings.js';
import YourTests        from './components/YourTests/YourTests.js';
import YourTestViewContainer     from './containers/YourTestViewContainer/YourTestViewContainer.js';
import MenuCard from './containers/MenuContainer/Menu'
import ResultsWindow    from './components/ResultsWindow/ResultsWindow.js';
import {StackNavigator} from 'react-navigation';
const AppView = StackNavigator({
    Menu      : {screen: MenuCard ,
        navigationOptions: ({navigation}) => ({
            header:() => null
        })},
    Settings      : { screen: Settings },
    Test          : { screen: Test },
    YourTests     : { screen: YourTests},
    ResultsWindow : { screen: ResultsWindow},
    YourTestViewContainer: {screen: YourTestViewContainer},

});


export default AppView;