import { RECEIVE_CURRENT_USER, RECEIVE_AUTH_ERRORS } from '../constants';
import * as API from '../utils/api';

export const receiveCurrentUser = user => ({
	type: RECEIVE_CURRENT_USER,
	user
});

export const clearErrors = () => ({
	type: RECEIVE_AUTH_ERRORS,
	errors: []
});

export const receiveAuthErrors = errors => ({
	type: RECEIVE_AUTH_ERRORS,
	errors
});

export const logout = () => dispatch => {
	API.logout()
		.then(() => dispatch(receiveCurrentUser(undefined)),
			e => console.log(e));
};

export const signup = ({ username, password }) => dispatch => {
	API.signup({ username, password })
		.then(user => dispatch(receiveCurrentUser(user)),
			e => dispatch(receiveAuthErrors(e.responseJSON)));
};

export const login = ({ username, password }) => dispatch => {
	API.login({ username, password })
		.then(user => dispatch(receiveCurrentUser(user)),
			e => dispatch(receiveAuthErrors(e.responseJSON)));
};