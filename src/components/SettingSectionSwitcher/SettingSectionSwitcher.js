import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Switcher from '../Switcher/Switcher.js';

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



const styles = StyleSheet.create({
    section:{
        backgroundColor :   'white',
        flexDirection   :   'row',
        justifyContent  :   'space-between',
        marginLeft      :   10,
        marginRight     :   10,
        marginTop       :   1,
        height          :   60,
        borderRadius    :   2,

    },
    text:{
        marginTop       :   20,
        marginLeft      :   5,
        color           :   '#fc5888',
        fontSize        :   15,
    },
    switcher:{
        marginTop       :   17,
        marginRight     :   5,
    },
});
