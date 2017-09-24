import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import LongSlider from '../LongSlider/LongSlider.js';

class SettingSectionSlider extends React.Component {
    render(){
        return(
            <View style={styles.section}>
                <Text style={styles.text}>{this.props.text}</Text>
                <LongSlider
                    minimum={this.props.minimum}
                    maximum={this.props.maximum}
                    initialNumber={this.props.initialNumber}
                    continuatingText={this.props.continuatingText}/>
            </View>
        )
    }
}
export default SettingSectionSlider;



const styles = StyleSheet.create({
    section:{
        backgroundColor :   'white',
        justifyContent  :   'space-between',
        marginLeft      :   10,
        marginRight     :   10,
        marginTop       :   10,
        height          :   120,
        borderRadius    :   2,

    },
    text:{
        marginTop       :   20,
        textAlign       :   'center',
        color           :   '#fc5888',
        fontSize        :   17,
    },
});
