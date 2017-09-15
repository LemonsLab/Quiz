import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';
import styles from '../../style/Button.js'


const ButtonComponent = (props) => 
    <TouchableHighlight style={styles.button} onPress={props.onPress} underlayColor='#D69FB1'>
             <View>
                 <Text style={styles.text}>{props.title}</Text>
             </View>
    </TouchableHighlight>;


export  default  ButtonComponent;