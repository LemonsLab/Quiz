/**
 * Created by piotrandrzejewski on 15.09.2017.
 */
import React from 'react';
import {
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Images from '../../components/image/image';
import Button from '../../components/Button/Button';
import styles from '../../style/Menu'




const imagesPNG = { logo: require('../../components/images/group.png') };



const Menu = () => {
    return <View>
        <Images logoStyle={styles.logo} logo={imagesPNG.logo}/>

        <Text style={styles.header}>Jakiś tekst nagłówkowy</Text>

        <Text style={styles.subheader}>Tekst mniejszą czcionką pod większym nagłówkiem</Text>

        <View style={styles.horizontal}>
            <Button title='Rozpocznij test' onPress={()=>navigate('Settings')}/>
            <Button title='Twoje testy' onPress={()=>navigate('Settings')}/>
        </View>
    </View>
};




export default Menu



