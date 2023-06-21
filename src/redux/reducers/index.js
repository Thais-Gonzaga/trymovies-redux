import { combineReducers } from 'redux';
import user from './user';
import favorites from './favorite';

const rootReducer = combineReducers({ user, favorites });

export default rootReducer;
