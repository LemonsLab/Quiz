import {
    StyleSheet,
} from 'react-native';




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

export default styles;