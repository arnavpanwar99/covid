import { createStore } from 'redux';
import { urlReducer } from './../reducers';

const store = createStore(urlReducer);

export default store;