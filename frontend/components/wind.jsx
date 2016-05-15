var React = require("react");

var Conversions = require("../helpers/conversions");
var compassImg = "http://res.cloudinary.com/swell/image/upload/v1463278396/compass.png";

var Wind = React.createClass({

	render: function(){

		if (this.props.dir && this.props.speed) {
			var style = {
				transform: "rotate(" + (this.props.dir) + "deg)"
			};

			return (
				<div className="wind-compass">
					<h2> Wind </h2>
					<img 
						src={compassImg}
						style={style}/>
					<div>{Conversions.cardinal(this.props.dir)} @ {this.props.speed}mph</div>
				</div>
			);	
		} else {
			return <div className="wind-compass"/>
		} 
	}
});

module.exports = Wind;