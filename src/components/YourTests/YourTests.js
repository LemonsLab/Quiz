import React  from 'react';
import {
        ScrollView,
        Text,
        View,
        } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TestViewSection from '../TestViewSection/TestViewSection.js';
import styles from '../../style/YourTests/YourTests';

class YourTests extends React.Component{
  render(){
    return(
          <LinearGradient style={styles.background} colors={['#fc5888', '#f77061']}>
              <View style={styles.topContainer}>
                  <Text style={styles.yourTestsTitle}>TWOJE TESTY</Text>
                  <View style={styles.frontalBackground}>
                      <ScrollView>
                          <TestViewSection testNumber='1' date='12.05.2017' result={56}/>
                          <TestViewSection testNumber='2' date='15.06.2017' result={1}/>
                          <TestViewSection testNumber='3' date='27.06.2017' result={0}/>
                          <TestViewSection testNumber='4' date='27.06.2017' result={56}/>
                          <TestViewSection testNumber='5' date='27.06.2017' result={85}/>
                          <TestViewSection testNumber='6' date='27.06.2017' result={56}/>
                          <TestViewSection testNumber='7' date='27.06.2017' result={100}/>
                          <TestViewSection testNumber='8' date='05.07.2017' result={86}/>
                      </ScrollView>
                  </View>
              </View>
          </LinearGradient>
    );
  }
}
export default YourTests

