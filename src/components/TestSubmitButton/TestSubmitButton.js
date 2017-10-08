import React  from 'react';
import styles               from '../../style/Test.js'
import CreateAdvancedButton from '../../HoC/ButtonHoC/CreateAdvancedButton.js';
import Linear               from '../Linear/Linear.js';
const SubmitButtonConfig = {
    text        :   'ZAKOŃCZ TEST',
    titleStyle  :   styles.titleStyle,
};

const SettingSubmitButton =  CreateAdvancedButton(SubmitButtonConfig)(Linear);

export default SettingSubmitButton;