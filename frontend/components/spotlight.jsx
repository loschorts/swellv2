var React = require("react");

var Spotlight = React.createClass({
	render: function(){
		return (
			<div id="spotlight">
				<img src="http://res.cloudinary.com/swell/image/upload/v1462425167/ruKkhOq_efxdug.jpg"/>
				<div className="blurb">
					<h2> 
						Never miss an epic session. 
					</h2>
					<p>
						See live conditions, forecasts, and predicted surf quality to find the best spots near you.
					</p>
				</div>
			</div>
			);
	}
});

module.exports = Spotlight;