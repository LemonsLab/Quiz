import React  from 'react';
import {
        StyleSheet,
        View,
        } from 'react-native';
import Question             from '../Question/Question.js';
import Answer               from '../Answer/Answer.js';

class QuestionAndAnswers extends React.Component{

  constructor(props){
      super(props);

      this.state = {
            checkedA  : false,
            checkedB  : false,
            checkedC  : false
      };
  }

  choseAnswerA(){
    this.setState({
            checkedA  : !this.state.checkedA,
            checkedB  : false,
            checkedC  : false
    });
  }
  choseAnswerB(){
    this.setState({
            checkedA  : false,
            checkedB  : !this.state.checkedB,
            checkedC  : false
    });
  }
  choseAnswerC(){
    this.setState({
            checkedA  : false,
            checkedB  : false,
            checkedC  : !this.state.checkedC
    });
  }

  render(){
    return(
        <View>
            <Question
                    questionNumber        =   { this.props.questionNumber       }
                    numberOfAllQuestions  =   { this.props.numberOfAllQuestions }
                    questionText          =   { this.props.questionText         }
            />
            <Answer
                    textAnswer            =   { this.props.textAnswerA          }
                    onPress               =   { this.choseAnswerA.bind(this)    }
                    checked               =   { this.state.checkedA             }
            />
            <Answer
                    textAnswer            =   { this.props.textAnswerB          }
                    onPress               =   { this.choseAnswerB.bind(this)    }
                    checked               =   { this.state.checkedB             }
            />
            <Answer
                    textAnswer            =   { this.props.textAnswerC          }
                    onPress               =   { this.choseAnswerC.bind(this)    }
                    checked               =   { this.state.checkedC             }
            />
        </View>
    );
  }
}
export default QuestionAndAnswers

const styles = StyleSheet.create({
});
