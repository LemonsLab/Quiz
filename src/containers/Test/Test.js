/**
 * Created by piotrandrzejewski on 21.10.2017.
 */
import React  from 'react';
import {
    Image,
    ScrollView,
    View,
} from 'react-native';
import LinearGradient       from 'react-native-linear-gradient';
import SettingSubmitButton  from '../../components/TestSubmitButton/TestSubmitButton.js';
import QuestionAndAnswers   from '../../components/QuestionAndAnswers/QuestionAndAnswers.js';
import styles               from '../../style/Test.js'
import TextComponent from   '../../components/Text/Text.js';
import { connect } from 'react-redux'




const mapStateToProps = (state) => ({
    questions:state.reducerTest.questions
});




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


    render(){
        return(
            <View style={styles.background}>
                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}} colors={['#fc5888', '#f77061']}>
                    <View style={styles.topContainer}>
                        <View style={{flexDirection : 'row',}}>
                            <Image
                                source  =   { imagesPNG.timer     }
                                style   =   { styles.image        }
                            />
                            <TextComponent
                                text    =   { this.state.timeLeft }
                                style   =   { styles.timer        }
                            />
                        </View>
                    </View>
                </LinearGradient>

                <View
                    style={styles.underTitle}>
                    <ScrollView
                        style={styles.frameForQuestions}>
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
                        <SettingSubmitButton/>
                    </View>
                </View>
            </View>
        );
    }
}
export default connect(mapStateToProps, null)(Test)
