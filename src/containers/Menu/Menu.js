import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../components/image/image';
import ButtonComponent from '../../components/Button/Button';

const imagesPNG = { logo: require('../../components/images/group.png') };

class Menu extends React.Component {
    render(){
        return(
              <LinearGradient colors={['#0E4B0E', '#86BA86']} style={styles.MenuContainer}>
                  <Images logoStyle={styles.logo} logo={imagesPNG.logo}/>

                  <TouchableHighlight style={styles.button} onPress={()=>navigate('Settings')}  underlayColor='#86BA86'>
                      <View><Text style={styles.text1}>Rozpocznij test</Text></View>
                  </TouchableHighlight>

                  <TouchableHighlight style={styles.button}  onPress={()=>navigate('Settings')} underlayColor='#86BA86'>
                      <View><Text style={styles.text2}>Twoje testy</Text></View>
                  </TouchableHighlight>

                  <TouchableHighlight style={styles.button}  onPress={()=>navigate('Settings')}  underlayColor='#86BA86'>
                      <View><Text style={styles.text2}>Ustawienia</Text></View>
                  </TouchableHighlight>
              </LinearGradient>
        )
    }
}
export default Menu;

const styles = StyleSheet.create({
    MenuContainer:{
        flex            :   1,
    },
    logo:{
        marginLeft      : 135,
        marginTop       : 40,
        marginBottom    : 70,
        width           : 111,
        height          : 120,
    },
    button:{
        marginLeft      : 50,
        marginRight     : 50,
        marginTop       : 20,
        height          : 50,
        backgroundColor : 'white',
    },
    text1:{
        fontSize        :  25,
        margin          :  10,
        marginLeft      :  50,
    },
    text2:{
        fontSize        :  25,
        margin          :  10,
        marginLeft      :  80,
    },
});
