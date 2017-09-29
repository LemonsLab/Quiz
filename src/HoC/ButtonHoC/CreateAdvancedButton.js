import React from 'react';
import {
    TouchableHighlight,
    View,
} from 'react-native';


const CreateAdvancedButton = (params) => (WrapperComponent) => class Button extends React.Component {
    constructor(props){
        super(props)
    }

     render(){
        return(
            <TouchableHighlight>
                <View>
                    <WrapperComponent {...params}/>
                </View>
            </TouchableHighlight>
        )
    }
} ;


export default CreateAdvancedButton;