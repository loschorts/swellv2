var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require('../stores/session_store');
var CurrentUserState = require('../modules/current_user_state');
var FavoriteState = require('../modules/favorite_state');
var SessionActions = require("../actions/session_actions");

var FavoriteStore = require("../stores/favorite_store");

var App = React.createClass({
	mixins: [CurrentUserState, FavoriteState],
	componentDidMount: function(){
		SessionActions.query();
	},
	render: function(){
 		return (
			<div id="app">
			<NavBar 
				currentUser={this.state.currentUser} 
				favorites={this.state.favorites}/>
			{this.props.children}
			</div>
			);
	}
});

module.exports = App;