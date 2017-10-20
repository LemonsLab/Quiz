/**
 * Created by piotrandrzejewski on 20.10.2017.
 */
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconButton from '../../components/IconButton/IconButton'
import Button from '../../components/Button/Button';
import styles from '../../style/Menu'



let config =  {
    imageSource:require('../../components/images/sear.png'),
    gradientColors:{
        firstColor:"#FF72D1",
        secondColor:"#FF72D1",
    },
    icon: {
        navigationTitle:"Settings",
        navigationName:"Settings",
    },
    testButton : {
        buttonTitle:"Start",
        navigationTitle:"Test",
        navigationName:"Test",
        underlayColor:"#D69FB1"
    },

    storeButton : {
        buttonTitle:"Twoje testy",
        navigationTitle:"YourTests",
        navigationName:"YourTests",
        underlayColor:"#D69FB1"
    }


};




 export default class Menu extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <LinearGradient
                colors={[config.gradientColors.firstColor, config.gradientColors.secondColor]}
                style={styles.Container}>
                <View
                    style={styles.image}>
                    <IconButton
                        imageStyle={styles.logo}
                        imageSource={config.imageSource}
                        onPress={
                            () =>
                            this.props.navigation
                                            .navigate(config.icon.navigationTitle, { name:config.icon.navigationName})}

                    />
                </View>
                <View
                   style={styles.horizontal}>
                   <Button
                       title={config.testButton.buttonTitle}
                       underlayColor={config.testButton.underlayColor}
                       onPress={
                           () =>
                           this.props.navigation
                                            .navigate(config.testButton.navigationTitle , {name:config.testButton.navigationName}) }/>
                    <Button
                        title={config.storeButton.buttonTitle}
                        underlayColor={config.storeButton.underlayColor}
                        onPress={
                            ()=> this.props.navigation
                                            .navigate(config.storeButton.navigationTitle , {name:config.storeButton.navigationName}) }/>
                </View>


            </LinearGradient>
        )
    }


};






