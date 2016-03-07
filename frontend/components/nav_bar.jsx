var React = require("react");
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");

var NavBar = React.createClass({
	mixins: [CurrentUserState, CheckIfExists],
	render: function(){
		var username = this.returnIfExists("this.state.currentUser.username");
		if (username) {username = "hi there, " + username; }
		return (
			<nav className="group">
				<a className="nav-item" href="#"> swell </a>
				<ul className="nav-item group">
					<li>{username}</li>
				</ul>
			</nav>
		);
	}
});

module.exports = NavBar;