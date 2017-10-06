import React from 'react';
import {
    StyleSheet,
    Switch,
    Text,
    View
} from 'react-native';



class Switcher extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            switchIsOn  :   this.props.switchedOn,
        };
    }

    render(){
        return(
            <View>
                <Switch
                    thumbTintColor  =   '#fc5888'
                    onTintColor     =   '#f5afbb'
                    onValueChange   =   {(value) => this.setState({switchIsOn: value})}
                    style           =   {this.props.style}
                    value           =   {this.state.switchIsOn} />
            </View>
        )
    }
}
export default Switcher;



const styles = StyleSheet.create(
);
