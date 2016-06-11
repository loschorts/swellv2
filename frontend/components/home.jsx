var React = require("react");

// components
var HomeJumbotron = require("./home_jumbotron");
var Navbar = require("./nav_bar");
var Spotlight = require("./spotlight");
var Collection = require("./collection");

window.SessionActions = require("../actions/session_actions");

var Home = React.createClass({
	render: function(){
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