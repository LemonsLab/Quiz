import React  from 'react';
import {
        ScrollView,
        StyleSheet,
        Text,
        View,
        } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SettingSectionSwitcher from '../SettingSectionSwitcher/SettingSectionSwitcher.js';
import SettingSectionSlider from '../SettingSectionSlider/SettingSectionSlider.js';
import SettingSubmitButton from '../SettingSubmitButton/SettingSubmitButton.js';

class Settings extends React.Component{

  savingSettings(){
  }

  render(){
    return(
        <ScrollView>
            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}} colors={['#fc5888', '#f77061']}>
                <View style={styles.topContainer}>
                    <Text style={styles.settingsTitle}>USTAWIENIA</Text>
                </View>
            </LinearGradient>

            <View style={styles.grayBackground}>
                <View style={{marginTop : 10}}/>
                <SettingSectionSwitcher switchedOn={true}   text='Włącz/Wyłącz stoper'/>
                <SettingSectionSwitcher switchedOn={false}  text='Automatyczne zapamiętywanie testów'/>

                <SettingSectionSlider
                    text='Ilość pytań w teście'
                    minimum={1}
                    maximum={30}
                    initialNumber={15}
                    continuatingText=''/>
                <SettingSectionSlider
                    text='Limit czasu stopera'
                    minimum={1}
                    maximum={60}
                    initialNumber={30}
                    continuatingText=':00 minut'/>
                <SettingSubmitButton title='ZAPISZ USTAWIENIA' onPress={this.savingSettings.bind(this)}/>
            </View>
        </ScrollView>
    );
  }
}
export default Settings

const styles = StyleSheet.create({
    topContainer:{
        height            :   70,
    },
    grayBackground:{
        height            :   550,
        backgroundColor   :   '#E0E0E0',
    },
    settingsTitle:{
      color               :   'white',
      textAlign           :   'center',
      marginTop           :   25,
      fontSize            :   15,
    },
});
