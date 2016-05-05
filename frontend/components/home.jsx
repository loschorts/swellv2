var React = require("react");
var Jumbotron = require("./jumbotron");
var Navbar = require("./nav_bar");
var Spotlight = require("./spotlight");
var Home = React.createClass({
	render: function(){
		var items = [];

		for (var i = 0; i < 100; i ++) {
			items.push(<li>{i}</li>);
		}

		return(
			<div id="home">
				<Jumbotron/>
				<main>
					<Spotlight/>
				</main>
			</div>
			);
	}
});

module.exports = Home;