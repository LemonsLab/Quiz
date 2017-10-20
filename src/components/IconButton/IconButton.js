/**
 * Created by piotrandrzejewski on 20.10.2017.
 */
import React from 'react';
import Images from '../../components/image/image';
import {
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { PropTypes } from 'prop-types'

const IconButton = (props) => {

    return <TouchableWithoutFeedback onPress={props.onPress}>
        <View>
            <Images
                imageStyle={props.imageStyle}
                imageSource={props.imageSource}
            />
        </View>
    </TouchableWithoutFeedback>

};

export default IconButton;

IconButton.propTypes = {
    onPress:PropTypes.func,
    imageStyle:PropTypes.number,
    imageSource:PropTypes.number
};