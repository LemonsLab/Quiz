import React from 'react';
import {
    StyleSheet,
    Switch,
    Text,
    View
} from 'react-native';



const Switcher = (props) => {
   return <View>
            <Switch
                thumbTintColor  =   '#fc5888'
                onTintColor     =   '#f5afbb'
                onValueChange   =   {(value) => props.changeValue(value)}
                style           =   {props.style}
                value           =   {props.switchedOn} />
          </View>
};


export default Switcher
