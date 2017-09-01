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
              <LinearGradient colors={['#FE5195', '#F76F62']} style={styles.MenuContainer}>
                  <Images logoStyle={styles.logo} logo={imagesPNG.logo}/>

                  <Text style={styles.header}>Jakiś tekst nagłówkowy</Text>

                  <Text style={styles.subheader}>Tekst mniejszą czcionką pod większym nagłówkiem</Text>

                  <View style={styles.horizontal}>
                    <TouchableHighlight style={styles.button} onPress={()=>navigate('Settings')}  underlayColor='#D69FB1'>
                        <View><Text style={styles.text1}>Rozpocznij test</Text></View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}  onPress={()=>navigate('Settings')} underlayColor='#D69FB1'>
                        <View><Text style={styles.text2}>Twoje testy</Text></View>
                    </TouchableHighlight>
                  </View>

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
        height          : 130,
    },
    button:{
        marginLeft      : 18,
        marginTop       : 100,
        height          : 40,
        backgroundColor : 'white',
        borderRadius    :  3,
    },
    text1:{
        fontSize        :  20,
        color           :  '#FE5195',
        marginTop       :  5,
        marginLeft      :  18,
        marginRight     :  15,
    },
    text2:{
        fontSize        :  20,
        color           :  '#FE5195',
        marginLeft      :  30,
        marginTop       :  5,
        marginRight     :  30,
    },
    horizontal:{
        flexDirection   : 'row',
    },
    header:{
      marginLeft        :  20,
      marginRight       :  20,
      fontSize          :  25,
      color             : 'white',
      textAlign         : 'center',
    },
    subheader:{
      marginLeft        :  70,
      marginRight       :  70,
      marginTop         :  20,
      fontSize          :  15,
      color             : 'white',
      textAlign         : 'center',
    },
});
