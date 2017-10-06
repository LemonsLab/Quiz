import React from 'react';
import {
    Image,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import styles from '../../style/YourTests/TestViewSection'


const imagesPNG = {
                    eye: require('../images/eye.png'),
                    trash: require('../images/trash.png')
                  };

class TestViewSection extends React.Component{

    openTest(){

    };

    deleteTest(){

    }

    render(){
        return(
            <View style={styles.section}>
                <Text style={styles.text}>Test #{this.props.testNumber}</Text>

                <View>
                    <Text style={styles.date}>Data: {this.props.date}</Text>
                    <Text style={styles.result}>Wynik: {this.props.result}%</Text>
                </View>

                <View style={{flexDirection : 'row'}}>
                    <TouchableWithoutFeedback onPress={this.openTest.bind(this)}>
                        <Image source={imagesPNG.eye} style={styles.image1}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.deleteTest.bind(this)}>
                        <Image source={imagesPNG.trash} style={styles.image2}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}
export default TestViewSection;

