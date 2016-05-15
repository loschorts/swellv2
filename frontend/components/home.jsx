var React = require("react");
var HomeJumbotron = require("./home_jumbotron");
var Navbar = require("./nav_bar");
var Spotlight = require("./spotlight");
var Collection = require("./collection");

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