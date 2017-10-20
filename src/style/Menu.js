import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    Container:{
        flex            :   1,
    },
    logo:{
        marginLeft      : 135,
        marginTop       : 70,
        marginBottom    : 70,
        width           : 40,
        height          : 40,
    },
    horizontal:{
        flexDirection   : 'row',
        marginTop       : 80,
    },
    header:{
        marginLeft        :  20,
        marginRight       :  20,
        fontSize          :  25,
        color             : 'black',
        textAlign         : 'center',
    },
    subheader:{
        marginLeft        :  70,
        marginRight       :  70,
        marginTop         :  20,
        fontSize          :  15,
        color             : 'black',
        textAlign         : 'center',
    },
});

export default styles;