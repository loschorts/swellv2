var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require('../stores/session_store');
var CurrentUserState = require('../modules/current_user_state');
var SessionActions = require("../actions/session_actions");

var App = React.createClass({
	mixins: [CurrentUserState],
	componentDidMount: function(){
		SessionActions.query();
	},
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