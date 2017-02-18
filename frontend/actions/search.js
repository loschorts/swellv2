import { RECEIVE_SEARCH_RESULTS } from '../constants';
import * as API from '../utils/api';

export const searchSpotName = name => dispatch => {
	API.searchSpotName(name).then(results => {
		dispatch(receiveSearchResults(results))
	});
}

export const receiveSearchResults = results => ({
	type: RECEIVE_SEARCH_RESULTS,
	results
});