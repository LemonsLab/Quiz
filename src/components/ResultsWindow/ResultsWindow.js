import React  from 'react';
import {
        ScrollView,
        StyleSheet,
        Text,
        View,
        } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MenuButton     from '../MenuButton/MenuButton';

class ResultsWindow extends React.Component{

  traceToMenu(){}

  traceToTryAgain(){}

  render(){
    return(
      <LinearGradient colors={['#FE5195', '#F76F62']} style={styles.backgrounContainer}>
          <ScrollView>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View style={styles.result}>
                      <Text style={styles.percents}>56%</Text>
                  </View>
              </View>

              <View style={styles.horizontal}>
                  <MenuButton title='Zakończ' onPress={this.traceToMenu.bind(this)}/>
                  <MenuButton title='Powtórz' onPress={this.traceToTryAgain.bind(this)}/>
              </View>
          </ScrollView>
      </LinearGradient>
    );
  }
}
export default ResultsWindow

const styles = StyleSheet.create({
  backgrounContainer:{
      flex              :   1,
      justifyContent    :   'space-between',
  },
  result:{
      alignItems        :   'center',
      justifyContent    :   'center',
      marginTop         :   80,
      backgroundColor   :   '#99CCCC',
      height            :   200,
      width             :   200,
      borderRadius       :  100,
  },
  percents:{
      fontSize          :   100,
      color             :   'white',
  },
  horizontal:{
      flexDirection   :   'row',
      justifyContent  :   'space-between',
      flex            :   1,
      marginTop       :   150,   
      marginLeft      :   5,
      marginRight     :   5,
      marginBottom    :   30,
  },
});
