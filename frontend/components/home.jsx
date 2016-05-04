var React = require("react");
var Jumbotron = require("./jumbotron");



var Home = React.createClass({
	render: function(){
		return(
			<div id="home">
				<Jumbotron/>
			</div>
			);
	}
});

module.exports = Home;