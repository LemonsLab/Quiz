import React  from 'react';
import {
        Text,
        View,
        } from 'react-native';
import styles from '../../style/Question.js';

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

