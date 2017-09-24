import React  from 'react';
import {
        Image,
        ScrollView,
        StyleSheet,
        Text,
        View,
        } from 'react-native';
import LinearGradient       from 'react-native-linear-gradient';
import SettingSubmitButton  from '../SettingSubmitButton/SettingSubmitButton.js';
import QuestionAndAnswers   from '../QuestionAndAnswers/QuestionAndAnswers.js';

const imagesPNG = {
                    timer: require('../images/timer.png'),
                  };

class Test extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        timeLeft    :   '45:46',
    };
  }

  finishTest(){
  }


  render(){
    return(
        <View style={styles.background}>
            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}} colors={['#fc5888', '#f77061']}>
                <View style={styles.topContainer}>
                    <View style={{flexDirection : 'row',}}>
                        <Image source={imagesPNG.timer} style={styles.image}/>
                        <Text style={styles.timer}>{this.state.timeLeft}</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.underTitle}>
                <ScrollView style={styles.frameForQuestions}>
                    <QuestionAndAnswers
                        questionNumber        = {1}
                        numberOfAllQuestions  = {30}
                        questionText          = 'Treść pytanie pierwszego bla cośtam i jakieśtam pierdoły wszystko powinno być łądnie przycięte jeśli wychodzi poza ramy?'
                        textAnswerA           = 'Tekst odpowiedzi odpowiednio długi, żeby wychodził poza ramy małego okienka odpowiedzi. Pełny tekst ma się pokazywać po wciśnięciu ikonki strzałki w dół i chować po wciśn ięciu strzałki w górę.'
                        textAnswerB           = 'Jakiś tekst do odpowiedzi B bla bla bla i tak dalej'
                        textAnswerC           = 'Krótka odpowiedź'
                    />
                </ScrollView>

                <View style={{marginBottom: 5}}>
                    <SettingSubmitButton title='ZAKOŃCZ TEST' onPress={this.finishTest.bind(this)}/>
                </View>
            </View>
        </View>
    );
  }
}
export default Test

const styles = StyleSheet.create({
    topContainer:{
        height            :   50,
        alignItems        :   'center',
    },
    underTitle:{
        flex              :   1,
    },
    timer:{
      color               :   'white',
      textAlign           :   'center',
      marginTop           :   12,
      fontSize            :   19,
    },
    frameForQuestions:{
      height              :   430,
    },
    background:{
      flex                :   1,
      backgroundColor     :   '#E0E0E0',
    },
    image:{
      width               :   25,
      height              :   25,
      marginTop           :   13,
      marginRight         :   10,
    },
});
