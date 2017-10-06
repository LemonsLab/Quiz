import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    topContainer:{
        height             :   70,
        flexDirection      :   'row',
        justifyContent     :   'space-between',
        marginLeft         :   20,
        marginRight        :   20,
    },
    title:{
        color              :   'white',
        textAlign          :   'center',
        marginTop          :   25,
        fontSize           :   15,
    },
    horizontal:{
        flexDirection      :   'row',
        justifyContent     :   'space-between',
        flex               :   1,
        marginLeft         :   5,
        marginRight        :   5,
        marginBottom       :   10,
        marginTop          :   10,
    },
    questionsFrame:{
        backgroundColor      :   '#E0E0E0',
        marginLeft           :   5,
        marginRight          :   5,
        height               :   400,
    },
    center:{
        textAlign           :   'center',
        marginTop           :   10,
        marginBottom        :   20,
        marginLeft          :   15,
        marginRight         :   15,
        color               :   'black',
        fontSize            :   15,
    },
});

export default styles;