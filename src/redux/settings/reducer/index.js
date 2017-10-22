/**
 * Created by piotrandrzejewski on 03.09.2017.
 */
import {
    SET_QUESTIONS_SIZE,
    SET_SHOULD_SAVE_TEST,
    SET_TEST_TIME_LIMIT,
    SET_SHOULD_TIME_LIMIT
} from '../../settings/actions/actionTypes';




const initialState = {
     questions_size:25,
     test_time_limit:false,
     time_per_test:10,
     should_save_test:true
};




export default (state=initialState,actions) => {
    switch(actions.type){
        case SET_QUESTIONS_SIZE:
            return  {
                ...state,
                questions_size:actions.questionSize,

            };
        case SET_SHOULD_SAVE_TEST:
            return  {
                ...state,
                should_save_test:actions.shouldTest,

            };
        case SET_TEST_TIME_LIMIT:
            return  {
                ...state,
                time_per_test:actions.limitTime,

            };
        case SET_SHOULD_TIME_LIMIT:
            return  {
                ...state,
                test_time_limit:actions.shouldLimit,

            };
        default:
            return state
    }

}




