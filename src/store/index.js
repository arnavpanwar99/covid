import { createStore, combineReducers } from 'redux';
import { basicDataReducer, filterReducer, rawDataReducer } from './../reducers';

const store = createStore(combineReducers({
    filterReducer,
    rawDataReducer,
    basicDataReducer
}));

export default store;