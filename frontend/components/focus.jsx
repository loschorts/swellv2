// libraries
var React = require("react");

// components
var WeatherOverlay = require("./weather_overlay");

// stores
var SpotStore = require("../stores/spot_store");
var ForecastStore = require("../stores/forecast_store");

// api utils
var SpotApiUtil = require("../utils/spot_api_util");
var ForecastApiUtil = require("../utils/forecast_api_util");

// modules 
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");

var Focus = React.createClass({
	componentDidMount: function(){
		// add listeners
		SpotStore.addListener(this.updateSpot);
		ForecastStore.addListener(this.update);
		// make api calls
		SpotApiUtil.fetchSpot(this.props.spotId);
		ForecastApiUtil.fetchForecast(this.props.spotId);
	},
	update: function(){
		this.setState({spot: SpotStore.find(this.props.spotId)});
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
	renderContent: function(){
		var spot = this.spotInfo;
		var forecast = this.forecastInfo;
		if (spot && forecast) {

		} else {1
			return "loading";
		}
	},
	render: function(){
		return (
			<div id="focus" className="group">
				<WeatherOverlay/>
				{this.renderContent()}
			</div>
		);
	}
})

module.exports = Focus;