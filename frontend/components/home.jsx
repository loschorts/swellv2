var React = require("react");
var Jumbotron = require("./jumbotron");

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
					<ul>
						{items}
					</ul>
				</main>
			</div>
			);
	}
});

module.exports = Home;