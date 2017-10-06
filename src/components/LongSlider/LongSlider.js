import React from 'react';
import {
    Slider,
    StyleSheet,
    Text,
    View
} from 'react-native';
import styles from '../../style/Settings/LongSlider.js'

class LongSlider extends React.Component{
    constructor(props) {
        super(props)
        this.state = {number: this.props.initialNumber}
    }
    getVal(val){
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.number}{this.props.continuatingText}
                </Text>

                <Slider
                    style={{ width: 350 }}
                    step={1}
                    minimumValue={this.props.minimum}
                    maximumValue={this.props.maximum}
                    value={this.state.number}
                    onValueChange={val => this.setState({ number: val })}
                    onSlidingComplete={ val => this.getVal(val)}
                    maximumTrackTintColor='#fc5888'
                    thumbTintColor='#fc5888'
                />
            </View>
        )
    }
}
export default LongSlider;


