import {combineReducers} from 'redux';

import Sessions from './sessions';
import Counties from './counties';
import Spots from './spots';


const Root = combineReducers({
	Sessions, Counties, Spots
});

export default RootReducer;

