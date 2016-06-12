var AppDispatcher = require("./dispatcher");
var Store = require('flux/utils').Store;

var FavoriteStore = new Store(AppDispatcher);

var _favorites = {};

FavoriteStore.__onDispatch = function(payload){
	switch(payload.actionType){
		case "RECEIVE_FAVORITES":
			this.set(payload.favorites);
    	this.__emitChange();
			break;
		case "ADD_FAVORITE":
			this.add(payload.favorite);
    	this.__emitChange();
			break;
		case "REMOVE_FAVORITE":
			this.remove(payload.favorite);
    	this.__emitChange();
			break;
	}
};

FavoriteStore.set = function(favorites) {
	_favorites = {};

	favorites.forEach(function(fav){
		_favorites[fav.id] = fav;
	});

	return _favorites;
};

FavoriteStore.add = function(favorite) {
	return _favorites[favorite.id] = favorite;
};

FavoriteStore.remove = function(favorite) {
	return _favorites[favorite.id] = undefined;
};

FavoriteStore.all = function() {
	return _favorites;
};

module.exports = FavoriteStore;
