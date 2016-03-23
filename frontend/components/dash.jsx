var React = require("react");
var Focus = require("./focus");
var Preview = require("./preview");

var Dash = React.createClass({
	render: function(){
		return(
			<main id="dash" className="group" spotId={1}>
				<section id="dash-left" className="group">
					<Focus/>
				</section>
				<section id="dash-right" className="group">
					<Preview/>
					<Preview/>
					<Preview/>
				</section>
			</main>
			);
	}
});

module.exports = Dash;