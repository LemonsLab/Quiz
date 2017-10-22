/**
 * Created by piotrandrzejewski on 03.09.2017.
 */
import {
    createStore,
    combineReducers
} from 'redux';
import  reducerSettings from '../redux/settings/reducer/index'
import  reducerTest from '../redux/test/reducer/index'


const reducer = combineReducers({
    reducerSettings:reducerSettings,
    reducerTest:reducerTest

});






const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);



export default store;