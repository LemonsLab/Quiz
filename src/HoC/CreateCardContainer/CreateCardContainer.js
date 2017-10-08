/**
 * Created by piotrandrzejewski on 15.09.2017.
 */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../components/image/image.js';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native';


const styles = StyleSheet.create({
    settings:{
        width           : 40,
        height          : 40,
    },
    Container:{
        flex: 1,
        flexDirection: 'column',
    },
    image:{
        alignSelf: 'flex-end',
        display            :   'flex',
        justifyContent  : 'flex-end',
    }

});

const imagesPNG = {
    settings: require('../../components/images/settings.png')
};



const CreateContainer = (WrappedComponent) =>  class GlobalContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <LinearGradient
                colors={['#fc5888', '#f77061']}
                style={styles.Container}>
                <View style={styles.image}>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Settings')}>
                        <View>
                            <Images
                                logoStyle={styles.logo}
                                logo={imagesPNG.settings}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                </View>

                <WrappedComponent {...this.props}/>

            </LinearGradient>
        )
    }


};

export  default CreateContainer;


