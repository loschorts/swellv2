var FavoriteApiUtil = require("../utils/favorite_api_util");
var AppDispatcher = require("../stores/dispatcher");

var FavoriteActions = {
	fetch: function(){
		FavoriteApiUtil.fetch(this._receive);
	},
	create: function(favorite){
		FavoriteApiUtil.create(favorite, this._add, this.error);
	},
	destroy: function(favorite){
		FavoriteApiUtil.destroy(favorite, this._remove, this.error);
	},
	error: function(response){
		console.log("error", response);
	},
	_receive: function(favorites){
		debugger
		AppDispatcher.dispatch({
			actionType: "RECEIVE_FAVORITES",
			favorites: favorites
		});
	},
	_add: function(favorite){
		AppDispatcher.dispatch({
			actionType: "ADD_FAVORITE",
			favorites: favorites
		});
	},
	_remove: function(favorite){
		AppDispatcher.dispatch({
			actionType: "REMOVE_FAVORITE",
			favorites: favorites
		});
	},

};

module.exports = FavoriteActions;