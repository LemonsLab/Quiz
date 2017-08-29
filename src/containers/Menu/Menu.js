import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../components/image/image';
import ButtonComponent from '../../components/Button/Button';





const imagesPNG = {
   logo: require('../../components/images/group.png')
};



class Menu extends React.Component {



    render(){
        return(
                <LinearGradient
                    colors={['#fc5888', '#f77061']}
                    style={styles.MenuContainer}>
                    <Images
                        logoStyle={styles.logo}
                        logo={imagesPNG.logo}/>
                    <ButtonComponent
                        title={"dalej"}
                        butttonStyle={styles.button}/>
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
        width: 100,
        height: 90,
        backgroundColor: "#a1ff4d",
    }
});