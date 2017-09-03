/**
 * Created by piotrandrzejewski on 03.09.2017.
 */
import { createStore } from 'redux';
import  reducerSettings from '../redux/reducer/index'



const store = createStore({

    SettingsReducer: reducerSettings
});







export default store;