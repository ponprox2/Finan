import {combineReducers} from 'redux';
import info from './infoReducer';
import statusSort from './sortReducer';

const reducers = combineReducers({
  personalInfo: info,
  statusSort: statusSort,
});

export default (state, action) => reducers(state, action);
