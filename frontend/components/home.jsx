var React = require("react");

var CurrentUserState = require("../modules/current_user_state");

// components
var HomeJumbotron = require("./home_jumbotron");
var Navbar = require("./nav_bar");
var Spotlight = require("./spotlight");
var Collection = require("./collection");

window.SessionActions = require("../actions/session_actions");

var Home = React.createClass({
	mixins: [CurrentUserState],
	render: function(){
		console.log(this.state);
		return(
			<div id="home">
				<HomeJumbotron/>
				<main>
					<Spotlight/>
					<Collection/>
				</main>
			</div>
		);
	}
});

module.exports = Home;