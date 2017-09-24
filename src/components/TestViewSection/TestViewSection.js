import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';

const imagesPNG = {
                    eye: require('../images/eye.png'),
                    trash: require('../images/trash.png')
                  };

class TestViewSection extends React.Component{

    openTest(){
    }

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

const styles = StyleSheet.create({
    section:{
        backgroundColor :   'white',
        flexDirection   :   'row',
        justifyContent  :   'space-between',
        marginTop       :   5,
        height          :   60,
        borderRadius    :   3,
        opacity         :   0.6,
    },
    text:{
        marginTop       :   18,
        marginLeft      :   10,
        color           :   'black',
        fontSize        :   18,
    },
    image1:{
        marginTop       :   5,
        marginRight     :   10,
        width           :   50,
        height          :   50,
    },
    image2:{
        marginTop       :   10,
        marginRight     :   10,
        width           :   35,
        height          :   35,
    },
    date:{
        marginTop       :   10,
        fontWeight      :   'bold',
    },
    result:{
        fontWeight      :   'bold',
    },
});
