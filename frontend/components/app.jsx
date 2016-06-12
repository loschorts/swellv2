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
	childrenWithProps: function(){
		var that = this;
		return React.Children.map(that.props.children, function(child) { 
  		return React.cloneElement(child, 
	  		{currentUser: that.state.currentUser,
	  		 favorites: that.state.favorites});
   	});
	},
	render: function(){
    var children = this.childrenWithProps();
		return (
			<div id="app">
			<NavBar currentUser={this.state.currentUser} 
				favorites={this.state.favorites}/>
			{children}
			</div>
			);
	}
});

module.exports = App;