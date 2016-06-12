var FavoriteActions = require("../actions/favorite_actions");
var FavoriteStore = require("../stores/favorite_store");
var SessionStore = require("../stores/session_store");

var FavoriteState = {
	getInitialState: function(){
		return {favorites: FavoriteStore.all()};
	},
	componentDidMount: function(){
		this.favoriteListener = FavoriteStore.addListener(this.updateFavorites);
		this.sessionListener = SessionStore.addListener(this.fetchFavorites);
		this.fetchFavorites();
	},
	componentWillUnMount: function(){
		this.favoriteListener.remove();
		this.sessionListener.remove();
	},
	fetchFavorites: function(){
		if (SessionStore.currentUser()) {
			FavoriteActions.fetch();
		} 
	},
	updateFavorites: function(){
		this.setState({favorites: FavoriteStore.all()});
	}
};

module.exports = FavoriteState;