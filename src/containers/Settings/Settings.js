/**
 * Created by piotrandrzejewski on 20.10.2017.
 */
import React  from 'react';
import {
    ScrollView,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from '../../components/Text/Text'
import SettingSectionSwitcher from '../../components/SettingSectionSwitcher/SettingSectionSwitcher.js';
import SettingSectionSlider from '../../components/SettingSectionSlider/SettingSectionSlider.js';
import SettingSubmitButton from '../../components/SettingSubmitButton/SettingSubmitButton.js';
import styles from '../../style/Settings/Settings.js'




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
        additionalDescription:" "
    },
    timeConfig : {
        text:'Limit czasu stopera',
        min:1,
        max:60,
        initial:30,
        additionalDescription:':00 minut'
    }

};




class Settings extends React.Component{

    render(){
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
                        switchedOn={config.saveSwitcher.value}
                        text={config.saveSwitcher.text}/>
                    <SettingSectionSwitcher
                        switchedOn={config.stoperSwitcher.value}
                        text={config.stoperSwitcher.text}/>

                    <SettingSectionSlider
                        text={config.questionConfig.text}
                        minimum={config.questionConfig.min}
                        maximum={config.questionConfig.max}
                        initialNumber={config.questionConfig.initial}
                        continuatingText={config.questionConfig.additionalDescription}/>
                    <SettingSectionSlider
                        text={config.timeConfig.text}
                        minimum={config.timeConfig.min}
                        maximum={config.timeConfig.max}
                        initialNumber={config.timeConfig.initial}
                        continuatingText={config.timeConfig.additionalDescription}/>
                    <View style={{marginTop : 10}}/>
                    <SettingSubmitButton/>
                </View>
            </ScrollView>
        );
    }
}
export default Settings
