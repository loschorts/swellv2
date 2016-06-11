var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require('../stores/session_store');
var CurrentUserState = require('../modules/current_user_state');

var App = React.createClass({
	mixins: [CurrentUserState],
	render: function(){
		return (
			<div id="app">
			<NavBar currentUser={this.state.currentUser}/>
			{this.props.children}
			</div>
			);
	}
});

module.exports = App;