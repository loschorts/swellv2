var SpotStore = require("../stores/spot_store");
var ForecastStore = require("../stores/forecast_store");
var WeatherStore = require("../stores/weather_store");

var SpotActions = require("../actions/spot_actions");
var ForecastActions = require("../actions/forecast_actions");
var WeatherActions = require("../actions/weather_actions");

var CurrentForecastState = {
	componentDidMount: function(){
		this.spotId = this.props.spotId || this.props.params.spotId;
		this.CurrentForecastStateSpotStoreListener = SpotStore.addListener(this.updateSpot);
		this.CurrentForecastStateForecastStoreListener = ForecastStore.addListener(this.updateForecast);
		this.CurrentForecastStateWeatherStoreListener = WeatherStore.addListener(this.updateWeather);

		SpotActions.fetch(this.spotId);
		ForecastActions.fetch(this.spotId);
	},
	componentWillUnmount: function(){
		this.CurrentForecastStateSpotStoreListener.remove();
		this.CurrentForecastStateForecastStoreListener.remove();
		this.CurrentForecastStateWeatherStoreListener = WeatherStore.addListener(this.updateWeather);
	},
	updateSpot: function(){
		var spot = SpotStore.get(this.spotId);
		WeatherActions.fetch(spot);
		this.setState({spot: spot});
	},
	updateForecast: function(){
		this.setState({ currentForecast: ForecastStore.getCurrent(this.spotId) });
	},
	updateWeather: function(){
		this.setState({ weather: WeatherStore.get(this.spotId)});
	}
};

module.exports = CurrentForecastState;