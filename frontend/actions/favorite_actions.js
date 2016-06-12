var FavoriteApiUtil = require("../utils/favorite_api_util");
var AppDispatcher = require("../stores/dispatcher");

var FavoriteActions = {
	fetch: function(){
		FavoriteApiUtil.fetch(this.receive);
	},
	create: function(){
		FavoriteApiUtil.create(this.add);
	},
	destroy: function(){
		FavoriteApiUtil.destroy(this.remove);
	},
	receive: function(favorites){
		AppDispatcher.dispatch({
			actionType: "RECEIVE_FAVORITES",
			favorites: favorites
		});
	},
	add: function(favorite){
		AppDispatcher.dispatch({
			actionType: "ADD_FAVORITE",
			favorite: favorite
		});
	},
	remove: function(favorite){
		AppDispatcher.dispatch({
			actionType: "REMOVE_FAVORITE",
			favorite: favorite
		});
	},

};

module.exports = FavoriteActions;