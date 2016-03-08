var React = require("react");
var WeatherOverlay = require("./weather_overlay");

var Focus = React.createClass({
	render: function(){
		return (
			<div id="focus" className="group">
				<WeatherOverlay/>
			</div>
		);
	}
})

module.exports = Focus;