var React = require("react");
var Focus = require("./focus");
var Preview = require("./preview");

var Dash = React.createClass({
	render: function(){
		return(
			<main id="dash" className="group">
				<section id="dash-left" className="group">
					<Focus spotId={1}/>
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