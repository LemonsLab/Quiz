import React  from 'react';

import CreateAdvancedButton from '../../HoC/ButtonHoC/CreateAdvancedButton.js';
import {SubmitButtonConfig} from '../Settings/Settings.js';
import Linear               from '../Linear/Linear.js';

const SettingSubmitButton =  CreateAdvancedButton(SubmitButtonConfig)(Linear);

export default SettingSubmitButton;
