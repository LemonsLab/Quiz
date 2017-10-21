import React from 'react';
import {
    Slider,
    StyleSheet,
    Text,
    View
} from 'react-native';
import styles from '../../style/Settings/LongSlider.js'

class LongSlider extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.initialNumber}{this.props.continuatingText}
                </Text>

                <Slider
                    style={{ width: 350 }}
                    step={1}
                    value={this.props.initialNumber}
                    minimumValue={this.props.minimum}
                    maximumValue={this.props.maximum}
                    onValueChange={(value) => this.props.changeValue(value)}
                    maximumTrackTintColor={this.props.maximumTrackTintColor}
                    thumbTintColor={this.props.thumbTintColor}
                />
            </View>
        )
    }
}
export default LongSlider;


