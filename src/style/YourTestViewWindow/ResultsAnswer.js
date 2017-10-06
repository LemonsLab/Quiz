import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    containerUnchecked:{
        marginLeft          :   20,
        marginRight         :   20,
        marginTop           :   10,
        backgroundColor     :   'white',
        borderRadius        :   2,
    },
    containerChecked:{
        marginLeft          :   20,
        marginRight         :   20,
        marginTop           :   10,
        backgroundColor     :   '#D1F54E',
        borderRadius        :   2,
    },
    containerWrong:{
        marginLeft          :   20,
        marginRight         :   20,
        marginTop           :   10,
        backgroundColor     :   'red',
        borderRadius        :   2,
    },
    text:{
        color               :   'black',
        fontSize            :   14,
        margin              :   10,
    },
    image:{
        width               :   30,
        height              :   30,
        margin              :   5,
    },
    row:{
        flexDirection       :   'row',
        justifyContent      :   'space-between',
    },
    textFrame:{
        flex                :   1,
    },
});

export default styles;