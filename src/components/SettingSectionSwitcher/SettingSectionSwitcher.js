import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Switcher from '../Switcher/Switcher.js';
import styles from '../../style/Settings/SettingsSectionSwitcher.js'

class SettingSection extends React.Component {
    render(){
        return(
            <View style={styles.section}>
                <Text style={styles.text}>{this.props.text}</Text>
                <Switcher style={styles.switcher} switchedOn={this.props.switchedOn}/>
            </View>
        )
    }
}
export default SettingSection;



