var React = require("react");
var Focus = require("./focus");
var Preview = require("./preview");

var Dash = React.createClass({
	render: function(){
		return(
			<main id="dash" className="group">
				<section id="dash-left" className="group">
					<Focus/>
				</section>
				<section id="dash-right" className="group">
					<div className="preview-wrapper group">
						<Preview/>
						<Preview/>
						<Preview/>
					</div>
				</section>
			</main>
			);
	}
});

module.exports = Dash;