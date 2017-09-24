import React  from 'react';
import {
        Image,
        StyleSheet,
        Text,
        View,
        } from 'react-native';

class Question extends React.Component{
  render(){
    return(
      <View>
          <Text style={styles.center}>Pytanie {this.props.questionNumber} / {this.props.numberOfAllQuestions}</Text>
          <Text style={styles.center}>{this.props.questionText}</Text>
      </View>
    );
  }
}
export default Question

const styles = StyleSheet.create({
  center:{
    textAlign           :   'center',
    marginTop           :   10,
    marginBottom        :   20,
    marginLeft          :   15,
    marginRight         :   15,
    color               :   'black',
    fontSize            :   15,
  },
});
