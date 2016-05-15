var React = require("react");

var compassImg = "http://res.cloudinary.com/swell/image/upload/e_negate/v1463266720/1463284607_icon-56-compass-south_n9fort_jfo5yb.png"

var _directions = [ 
	"N", "NNE", "NE", "ENE", 
	"E", "ESE", "SE", "SSE", 
	"S", "SSW", "SW", "WSW", 
	"W", "WNW", "NW", "NNW"
	];

var Wind = React.createClass({
	direction: function(){
		var idx = parseInt((this.props.dir / 360 * 16).toFixed());
		return _directions[idx];
	},
	render: function(){
		var style = {
			transform: "rotate(" + (this.props.dir) + "deg)"
		};

		return (
			<div className="wind-compass">
				<h2> Wind </h2>
				<img 
					src={compassImg}
					style={style}/>
				<div>{this.direction()} @ {this.props.speed}mph</div>
			</div>
			);
	}
});

module.exports = Wind;