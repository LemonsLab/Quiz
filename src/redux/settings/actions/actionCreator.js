/**
 * Created by piotrandrzejewski on 03.09.2017.
 */
import {
    SET_QUESTIONS_SIZE,
    SET_SHOULD_SAVE_TEST,
    SET_TEST_TIME_LIMIT,
    SET_SHOULD_TIME_LIMIT
} from './actionTypes';




export function setQuestionSize(questionSize){
    return {
        type:SET_QUESTIONS_SIZE,
        questionSize
    }
}

export function setShouldSaveTest(shouldTest){
    return {
        type:SET_SHOULD_SAVE_TEST,
        shouldTest
    }
}

export function setTimeLimits(limitTime){
    return {
        type:SET_TEST_TIME_LIMIT,
        limitTime
    }
}

export function setTimePerTest(shouldLimit){
    return {
        type:SET_SHOULD_TIME_LIMIT,
        shouldLimit
    }
}




