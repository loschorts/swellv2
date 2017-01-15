import {combineReducers} from 'redux';

import Session from './session';
import Counties from './counties';
import Spots from './spots';


const Root = combineReducers({
	Session, Counties, Spots
});

export default Root;

