import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class MenuButton extends React.Component {
    render(){
        return(
          <TouchableHighlight style={styles.button} onPress={this.props.onPress} underlayColor='#D69FB1'>
              <View><Text style={styles.text}>{this.props.title}</Text></View>
          </TouchableHighlight>
        )
    }
}
export default MenuButton;

const styles = StyleSheet.create({
    button:{
        height          :   70,
        width           :   170,
        backgroundColor :   'white',
        borderRadius    :   5,
    },
    text:{
        fontSize        :   20,
        color           :   '#FE5195',
        marginTop       :   20,
        textAlign       :   'center',
    },
});
