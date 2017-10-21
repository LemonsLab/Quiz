/**
 * Created by piotrandrzejewski on 20.10.2017.
 */
import React  from 'react';
import {
    ScrollView,
    View,
} from 'react-native';
import {  connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../../components/Text/Text';
import SettingSectionSwitcher from '../../components/SettingSectionSwitcher/SettingSectionSwitcher.js';
import SettingSectionSlider from '../../components/SettingSectionSlider/SettingSectionSlider.js';
import SettingSubmitButton from '../../components/SettingSubmitButton/SettingSubmitButton.js';
import styles from '../../style/Settings/Settings.js';
import {
    setQuestionSize,
    setShouldSaveTest,
    setTimeLimits,
    setTimePerTest
} from '../../redux/actions/actionCreator'



let config = {
    gradient:{
        start:{
            x:0.0,
            y:0.25,
        },
        end:{
            x:0.5,
            y:1.5,
        },
        colors:{
            firstColor:'#fc5888',
            secondColor:'#f77061',
        }
    },
    title:'USTAWIENIA',
    saveSwitcher:{
        text:"Włącz/Wyłącz stoper",
        value:true,
    },
    stoperSwitcher:{
        text:"Automatyczne zapamiętywanie testów",
        value :true
    },
    questionConfig : {
        text:"Ilość pytań w teście",
        min:1,
        max:30,
        initial:15,
        additionalDescription:" ",
        maximumTrackTintColor:"#fc5888",
        thumbTintColor:"#fc5888"
    },
    timeConfig : {
        text:'Limit czasu stopera',
        min:1,
        max:60,
        initial:30,
        additionalDescription:':00 minut',
        maximumTrackTintColor:"#fc5888",
        thumbTintColor:"#fc5888"
    }

};



const mapStateToProps = (state) => ({
    questions_size:state.reducerSettings.questions_size,
    test_time_limit:state.reducerSettings.test_time_limit,
    time_per_test:state.reducerSettings.time_per_test,
    should_save_test:state.reducerSettings.should_save_test
});

const mapDispatchToProps = (dispatch) => ({
    setQuestionSize:(questionSize) => dispatch(setQuestionSize(questionSize)),
    setShouldSaveTest:(shouldTest) => dispatch(setShouldSaveTest(shouldTest)),
    setTimeLimits:(limitTime) => dispatch(setTimeLimits(limitTime)),
    setTimePerTest:(shouldLimit) => dispatch(setTimePerTest(shouldLimit)),
});






class Settings extends React.Component{

    render(){

        let {
            questions_size,
            test_time_limit,
            time_per_test,
            should_save_test,
            setQuestionSize,
            setShouldSaveTest,
            setTimeLimits,
            setTimePerTest
        } = this.props;

        return(
            <ScrollView>
                <LinearGradient
                    start={config.gradient.start} end={config.gradient.end}
                    colors={[config.gradient.colors.firstColor,config.gradient.colors.secondColor ]}>
                    <View style={styles.topContainer}>
                        <TextComponent
                            style={styles.settingsTitle}
                            text={config.title}
                        />
                    </View>
                </LinearGradient>

                <View style={styles.grayBackground}>
                    <View style={{marginTop : 10}}/>
                    <SettingSectionSwitcher
                        switchedOn={test_time_limit}
                        text={config.saveSwitcher.text}
                        changeValue={setTimePerTest}
                       />
                    <SettingSectionSwitcher
                        switchedOn={should_save_test}
                        text={config.stoperSwitcher.text}
                        changeValue={setShouldSaveTest}
                    />

                    <SettingSectionSlider
                        maximumTrackTintColor={config.questionConfig.maximumTrackTintColor}
                        thumbTintColor={config.questionConfig.thumbTintColor}
                        changeValue={setQuestionSize}
                        text={config.questionConfig.text}
                        minimum={config.questionConfig.min}
                        maximum={config.questionConfig.max}
                        initialNumber={questions_size}
                        continuatingText={config.questionConfig.additionalDescription}/>
                    <SettingSectionSlider
                        maximumTrackTintColor={config.timeConfig.maximumTrackTintColor}
                        thumbTintColor={config.timeConfig.thumbTintColor}
                        changeValue={setTimeLimits}
                        text={config.timeConfig.text}
                        minimum={config.timeConfig.min}
                        maximum={config.timeConfig.max}
                        initialNumber={time_per_test}
                        continuatingText={config.timeConfig.additionalDescription}/>
                    <View style={{marginTop : 10}}/>
                    <SettingSubmitButton/>
                </View>
            </ScrollView>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Settings);
