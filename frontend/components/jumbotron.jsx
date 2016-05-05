var React = require("react");
var NavBar = require("./nav_bar");
var SessionStore = require("../stores/session_store");
var UserApiUtil = require("../utils/user_api_util");
var CurrentUserState = require("../modules/current_user_state");

var Jumbotron = React.createClass({
	render: function(){
		return (
			<div id="jumbotron" className="group">
				<h1 id="header"> Better surf. </h1>
				<h2 id="tagline"> 
					Find forecasts for your favorite spots and know before you go.
				</h2>
				<div id="search-container">
					<input id="search" placeholder="search for a spot or county"/>
				</div>
			</div>
			);
	}
});

module.exports = Jumbotron;