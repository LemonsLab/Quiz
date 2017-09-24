import React  from 'react';
import {
        StyleSheet,
        Text,
        TouchableHighlight,
        View,
        } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class SettingSubmitButton extends React.Component{
  render(){
    return(
      <TouchableHighlight style={styles.button} onPress={this.props.onPress} underlayColor='#f77061'>
          <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}} colors={['#fc5888', '#f77061']}>
            <View><Text style={styles.text}>{this.props.title}</Text></View>
          </LinearGradient>
      </TouchableHighlight>
    );
  }
}
export default SettingSubmitButton

const styles = StyleSheet.create({
  button:{
      marginLeft      :   10,
      marginRight     :   10,
      marginTop       :   20,
  },
  text:{
      fontSize        :  20,
      color           :  'white',
      marginTop       :  10,
      marginBottom    :  10,
      textAlign       : 'center',
  },
});
