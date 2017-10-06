import React from 'react';
import createContainer from '../../HoC/CreateCardContainer/CreateCardContainer'
import YourTestView from '../../components/YourTestView/YourTestView.js';
import pytanko from '../../TestBlaBla'





const YourTestViewS = createContainer(YourTestView);

const YourTestViewContainer = (pytanko) => <YourTestViewS Test={pytanko} />;


export default YourTestViewContainer;

