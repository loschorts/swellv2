var AppDispatcher = require("./dispatcher");
var Store = require('flux/utils').Store;

var FavoriteStore = window.fs = new Store(AppDispatcher);

var _favorites = [];

FavoriteStore.__onDispatch = function(payload){
	switch(payload.actionType){
		case "RECEIVE_FAVORITES":
		case "ADD_FAVORITE":
		case "REMOVE_FAVORITE":
			this._set(payload.favorites);
    	this.__emitChange();
			break;
	}
};

FavoriteStore._set = function(favorites) {
	return _favorites = favorites;
};

FavoriteStore.includes = function(favId){
	for (var spotId in _favorites) {
		if (parseInt(spotId) === favId) {
			return true;
		}
	}
	return false;
};

FavoriteStore.all = function() {
	return _favorites.slice();
};

module.exports = FavoriteStore;
