/**
 * Created by piotrandrzejewski on 03.09.2017.
 */
import {
    SET_QUESTIONS_SIZE,
    SET_SHOULD_SAVE_TEST,
    SET_TEST_TIME_LIMIT,
    SET_TIME_PER_TEST
} from './actionTypes';




export function setQuestionSize(num){
    return {
        type:SET_QUESTIONS_SIZE,

    }
}

export function setShouldSaveTest(){
    return {
        type:SET_SHOULD_SAVE_TEST
    }
}

export function setTimeLimits(){
    return {
        type:SET_TEST_TIME_LIMIT
    }
}

export function setTimePerTest(){
    return {
        type:SET_TIME_PER_TEST
    }
}




