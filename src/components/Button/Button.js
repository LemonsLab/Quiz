import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import styles from '../../style/Button.js'
import { PropTypes } from 'prop-types'

const ButtonComponent = (props) => 
    <TouchableHighlight
        style={styles.button}
        onPress={props.onPress}
        underlayColor={props.underlayColor}>
             <View>
                 <Text
                 style={styles.text}>
                     {props.title}
                 </Text>
             </View>
    </TouchableHighlight>;


export  default  ButtonComponent;


ButtonComponent.propTypes = {
    underlayColor:PropTypes.string,
    title:PropTypes.string,
    text:PropTypes.number
};