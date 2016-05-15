var React = require("react");
var Conversions = require("../helpers/conversions");

var compassImg = "http://res.cloudinary.com/swell/image/upload/v1463278396/compass.png";

var Waves = React.createClass({
	render: function(){
		if ( this.props.swell ) {
			var mainSwell = this.props.swell[0];
			var dir = Conversions.cardinal(mainSwell.dir + 180);
			var height = Conversions.imperial(mainSwell.hs);
			var period = mainSwell.tp;
			var style = {
				transform: "rotate(" + (mainSwell.dir + 180) + "deg)"
			};
			return (
				<div className="waves-box">
					<h2>Primary Swell</h2>
					<img className="swell-arrow" src={compassImg} style={style}/>
					<div className="swell-item-info"> {dir} @ {height}ft, {period} sec </div>
				</div>
			);
		} else {
			return <div className="waves-box"/>;
		}
	},

	swellItem: function(swellInfo){

	}
});

module.exports = Waves;