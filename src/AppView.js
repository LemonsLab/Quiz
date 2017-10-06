
import React            from 'react';
import Test from './components/Test/Test';
import Settings         from './components/Settings/Settings.js';
import YourTests        from './components/YourTests/YourTests.js';
import YourTestViewContainer     from './containers/YourTestViewContainer/YourTestViewContainer.js';
import Menu from './components/Menu/Menu'
import ResultsWindow    from './components/ResultsWindow/ResultsWindow.js';


class AppView extends React.Component {

    render(){
        return(
          <Settings/>
        )
    }
}



export default AppView;
