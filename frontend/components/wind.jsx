var React = require("react");

var compassImg = "http://res.cloudinary.com/swell/image/upload/v1463278396/compass.png";

var Wind = React.createClass({
	render: function(){
		var style = {
			transform: "rotate(" + (this.props.deg) + "deg)"
		};

		return (
			<div className="wind-compass">
				<h2> Wind </h2>
				<img 
					src={compassImg}
					style={style}/>
				<div>{this.props.dir} ({this.props.deg}°) @ {this.props.speed} mph</div>
			</div>
		);	
	}
});

module.exports = Wind;