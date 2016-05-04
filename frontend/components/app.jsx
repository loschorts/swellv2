var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require('../stores/session_store');
var UserApiUtil = require('../utils/user_api_util');
var CurrentUserState = require('../modules/current_user_state');

window.UserApiUtil = UserApiUtil;

var App = React.createClass({
	render: function(){
		return (
			<div id="swell" className="group">
			{this.props.children}
			</div>
			);
	}
});

module.exports = App;