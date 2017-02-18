import {combineReducers} from 'redux';

import Session from './session';
import Counties from './counties';
import Spots from './spots';
import Search from './search';

const Root = combineReducers({
	Session, Counties, Spots, Search
});

export default Root;

