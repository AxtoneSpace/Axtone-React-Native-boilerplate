import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import SwitchLangReducer from './SwitchLangReducer';

const rootReducer = combineReducers({
  AuthReducer,
  SwitchLangReducer,
});

export default rootReducer;
