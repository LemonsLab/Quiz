import React from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MenuButton     from '../MenuButton/MenuButton';
import ResultsAnswer  from '../ResultsAnswer/ResultsAnswer';
import styles         from '../../style/YourTestViewWindow/YourTestView.js';


class YourTestView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            testNr              :   15,
            date                :   '15.07.2017',
            result              :   87,
            questionNumber      :   3,
            numberOfAllQuestions:   30,
            questionText        :   'Treść pytania. Bla bla bla cośtam i tak dalej bla bla bla?',
            checkedA            :   true,
            checkedB            :   false,
            checkedC            :   false,
            goodAnswerA         :   false,
            goodAnswerB         :   true,
            goodAnswerC         :   false,
            textAnswerA         :   'Odpowiedź na pierwsze pytanie.',
            textAnswerB         :   'Odpowiedź na drugie pytanie i to powinno być trochę dłuższe, żeby pokazać jak się rozwija komponent odpowiedzi po wciśnięciu przycisku.',
            textAnswerC         :   'Odpowiedź na trzecie pytanie.',
        };
    }

    traceToMenu(){}

    traceToTryAgain(){}

    render(){
        return(
              <LinearGradient colors={['#FE5195', '#F76F62']} style={{flex: 1}}>
                    <View style={styles.topContainer}>
                          <Text style={styles.title}>Test #{this.state.testNr}</Text>
                          <Text style={styles.title}>{this.state.result}%</Text>
                          <Text style={styles.title}>{this.state.date}</Text>
                    </View>
                    <ScrollView>

                    <ScrollView style={styles.questionsFrame}>
                        <Text
                            style={styles.center}>Pytanie {this.state.questionNumber} / {this.state.numberOfAllQuestions}</Text>
                        <Text
                            style={styles.center}>
                            {this.props.question}</Text>

                        <ResultsAnswer
                            checked={this.state.checkedA}
                            goodAnswer={this.state.goodAnswerA}
                            textAnswer={this.props.A}/>
                        <ResultsAnswer
                            checked={this.state.checkedB}
                            goodAnswer={this.state.goodAnswerB}
                            textAnswer={this.props.B}/>
                        <ResultsAnswer
                            checked={this.state.checkedC}
                            goodAnswer={this.state.goodAnswerC}
                            textAnswer={this.props.C}/>
                        <View style={{marginBottom: 30}}/>
                    </ScrollView>

                    <View style={styles.horizontal}>
                        <MenuButton title='Menu'    onPress={this.traceToMenu.bind(this)}/>
                        <MenuButton title='Powtórz' onPress={this.traceToTryAgain.bind(this)}/>
                    </View>

                  </ScrollView>
              </LinearGradient>
        )
    }
}
export default YourTestView;
