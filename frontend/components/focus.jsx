// libraries
var React = require("react");

// components
var WeatherOverlay = require("./weather_overlay");

// mixins
var CurrentUserState = require("../modules/current_user_state");
var CurrentForecastState = require("../modules/current_forecast_state");
var CheckIfExists = require("../modules/check_if_exists");

var Focus = React.createClass({
	mixins: [CurrentUserState, CurrentForecastState, CheckIfExists],
	render: function(){
		return (
			<div id="focus" className="group">
				<h2 className="spot-name">{this.returnIf("this.state.spot.name", "loading spot name...")}</h2>
				<h3 className="shape-full">{this.returnIf("this.state.currentForecast.shape_full", "loading shape...")}</h3>
				<h3 className="size">{this.returnIf("this.state.currentForecast.size", "loading size...")}</h3>	
			</div>
		);
	}
})

module.exports = Focus;