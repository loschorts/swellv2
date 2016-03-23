// libraries
var React = require("react");

// components
var WeatherOverlay = require("./weather_overlay");

// modules 
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");

var Focus = React.createClass({
	componentDidMount: function(){
		SpotApiUtil.fetchSpot(this.props.spotId);
		SpotStore.addListener(this.updateSpot);
	},
	updateSpot: function(){
		ForecastStore.addListener(this.updateForecast);
		ForecastApiUtil.fetchForecast();
		this.setState({spot: SpotStore.find(this.props.spotId)});
	},
	updateForecast: function(){
		this.setState({forecast: ForecastStore.find(this.props.spotId)});
	},
	spotInfo: function(){
		if (this.state.spot) {
			return (

				);
		}
	},
	forecastInfo: function(){
		if (this.state.forecast) {
			return (
				
				);
		}
	},
	render: function(){
		return (
			<div id="focus" className="group">
				<WeatherOverlay/>
				{this.spotInfo()}
				{this.forecastInfo()}
			</div>
		);
	}
})

module.exports = Focus;