import React  from 'react';
import {
    View
} from 'react-native';
import LinearGradient       from 'react-native-linear-gradient';
import TextComponent        from '../Text/Text.js';

const Linear = (props) =>
    <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.5}} colors={['#fc5888', '#f77061']}>
        <View>
            <TextComponent text={props.text} style={props.titleStyle}/>
        </View>
    </LinearGradient>;

export default Linear;