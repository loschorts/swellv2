var React = require("react");
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");

var NavBar = React.createClass({
	mixins: [CurrentUserState, CheckIfExists],
	render: function(){
		var username = this.returnIfExists("this.state.currentUser.username");
		return (
			<nav className="nav-bar">{username}</nav>
		);
	}
});

module.exports = NavBar;