import {createStore} from 'redux';
// import {Reducers} from "../reducers/Reducers"

import {combineReducers} from '@reduxjs/toolkit';
import Reducers2 from '../reducers/Reducers2';
import Reducers from '../reducers/Reducers';
const routeReducer = combineReducers({Reducers, Reducers2});

const store = createStore(routeReducer);

export default store;
