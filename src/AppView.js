
import React            from 'react';

import Test             from './components/Test/Test.js';

import Settings         from './components/Settings/Settings.js';


import YourTestViewContainer     from './containers/YourTestViewContainer/YourTestViewContainer.js';


class AppView extends React.Component {

    render(){
        return(
          <Settings/>
        )
    }
}

export default AppView;
