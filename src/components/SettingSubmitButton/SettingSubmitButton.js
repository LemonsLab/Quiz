import React  from 'react';

import CreateAdvancedButton from '../../HoC/ButtonHoC/CreateAdvancedButton.js';
import Linear               from '../Linear/Linear.js';
import styles from '../../style/Settings/Settings.js'
 const SubmitButtonConfig = {
     text        :  'ZAPISZ USTAWIENIA',
     titleStyle  :   styles.titleStyle,
 };


const SettingSubmitButton =  CreateAdvancedButton(SubmitButtonConfig)(Linear);

export default SettingSubmitButton;
