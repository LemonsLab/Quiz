/**
 * Created by piotrandrzejewski on 03.09.2017.
 */
import {
    SET_QUESTIONS_SIZE,
    SET_SHOULD_SAVE_TEST,
    SET_TEST_TIME_LIMIT,
    SET_TIME_PER_TEST
} from '../actions/actionTypes';




const initialState = {
     questions_size:25,
     test_time_limit:false,
     time_per_test:null,
     should_save_test:false
};




export default (state=initialState,actions) => {
    switch(actions.type){
        case SET_QUESTIONS_SIZE:
            return  {
                ...state,
                questions_size:true,

            };
        case SET_SHOULD_SAVE_TEST:
            return  {
                ...state,
                questions_size:true,

            };
        case SET_TEST_TIME_LIMIT:
            return  {
                ...state,
                questions_size:true,

            };
        case SET_TIME_PER_TEST:
            return  {
                ...state,
                questions_size:false,

            };
        default:
            return state
    }

}




