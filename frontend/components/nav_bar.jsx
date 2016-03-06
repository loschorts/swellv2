var React = require("react");
var CurrentUserState = require("../modules/current_user_state");

var NavBar = React.createClass({
	mixins: [CurrentUserState],
	render: function(){
		return (
			<nav className="nav-bar"></nav>
		);
	}
});

module.exports = NavBar;