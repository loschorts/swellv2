// libraries
var React = require("react");

// components
var WeatherOverlay = require("./weather_overlay");

// mixins
var CurrentUserState = require("../modules/current_user_state");
var CurrentForecastState = require("../modules/current_forecast_state");

var Focus = React.createClass({
	mixins: [CurrentUserState, CurrentForecastState],
	render: function(){
		return (
			<div id="focus" className="group">
				{JSON.stringify(this.state)}
			</div>
		);
	}
})

module.exports = Focus;