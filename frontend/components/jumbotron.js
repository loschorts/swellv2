var React = require("react");
var NavBar = require("./nav_bar");
var UserStore = require("../stores/user_store");
var UserApiUtil = require("../utils/user_api_util");
var CurrentUserState = require("../modules/current_user_state");

var Jumbotron = React.createClass({
	mixins: [CurrentUserState],
	render: function(){
		return (
			<div id="jumbotron" className="group">
			</div>
			);
	}
});

module.exports = Jumbotron;