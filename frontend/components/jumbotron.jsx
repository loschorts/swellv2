var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require("../stores/session_store");
var UserApiUtil = require("../utils/user_api_util");
var CurrentUserState = require("../modules/current_user_state");

var Jumbotron = React.createClass({
	mixins: [CurrentUserState],
	render: function(){
		return (
			<div id="jumbotron" className="group">
				Jumbotron is black
			</div>
			);
	}
});

module.exports = Jumbotron;