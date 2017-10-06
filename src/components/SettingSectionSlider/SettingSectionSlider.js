import React from 'react';
import {
    Text,
    View
} from 'react-native';
import LongSlider from '../LongSlider/LongSlider.js';
import styles from "../../style/Settings/SettingsSectionSlider.js"


class SettingSectionSlider extends React.Component {
    render(){
        return(
            <View style={styles.section}>
                <Text style={styles.text}>{this.props.text}</Text>
                <LongSlider
                    minimum={this.props.minimum}
                    maximum={this.props.maximum}
                    initialNumber={this.props.initialNumber}
                    continuatingText={this.props.continuatingText}
                />
            </View>
        )
    }
}
export default SettingSectionSlider;


