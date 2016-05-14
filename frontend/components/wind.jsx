var React = require("react");

var Wind = React.createClass({
	render: function(){
		return (
			<div className="wind-compass">
				<img src={$.cloudinary.image("1463284607_icon-56-compass-south_n9fort_jfo5yb.png")}/>
			</div>
			);
	}
});

module.exports = Wind;