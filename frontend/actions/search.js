import { SEARCH_SPOT_NAME } from '../constants';
import * as API from '../utils/api';

export const searchSpotName name => dispatch => {
	API
}

export const login = ({ username, password }) => dispatch => {
	API.login({ username, password })
		.then(user => dispatch(receiveCurrentUser(user)),
			e => dispatch(receiveAuthErrors(e.responseJSON)));
};