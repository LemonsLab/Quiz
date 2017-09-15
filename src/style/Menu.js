import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    MenuContainer:{
        flex            :   1,
    },
    logo:{
        marginLeft      : 135,
        marginTop       : 70,
        marginBottom    : 70,
        width           : 130,
        height          : 140,
    },
    horizontal:{
        flexDirection   : 'row',
        marginTop       : 80,
    },
    header:{
        marginLeft        :  20,
        marginRight       :  20,
        fontSize          :  25,
        color             : 'white',
        textAlign         : 'center',
    },
    subheader:{
        marginLeft        :  70,
        marginRight       :  70,
        marginTop         :  20,
        fontSize          :  15,
        color             : 'white',
        textAlign         : 'center',
    },
});

export default styles;