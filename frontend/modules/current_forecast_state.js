var SpotStore = require("../stores/spot_store");
var ForecastStore = require("../stores/forecast_store");
var WeatherStore = require("../stores/weather_store");
var CountyForecastStore = require("../stores/county_forecast_store");


var SpotActions = require("../actions/spot_actions");
var ForecastActions = require("../actions/forecast_actions");
var WeatherActions = require("../actions/weather_actions");
var CountyForecastActions = require("../actions/county_forecast_actions");

var CurrentForecastState = {
	componentDidMount: function(){
		this.spotId = this.props.spotId || this.props.params.spotId;
		this.CurrentForecastStateSpotStoreListener = SpotStore.addListener(this.updateSpot);
		this.CurrentForecastStateForecastStoreListener = ForecastStore.addListener(this.updateForecast);
		this.CurrentForecastStateWeatherStoreListener = WeatherStore.addListener(this.updateWeather);
		this.CurrentForecastStateCountyForecastStoreListener = CountyForecastStore.addListener(this.updateCountyForecast);

		SpotActions.fetch(this.spotId);
		ForecastActions.fetch(this.spotId);
	},
	componentWillUnmount: function(){
		this.CurrentForecastStateSpotStoreListener.remove();
		this.CurrentForecastStateForecastStoreListener.remove();
		this.CurrentForecastStateWeatherStoreListener = WeatherStore.addListener(this.updateWeather);
		this.CurrentForecastStateCountyForecastStoreListener = CountyForecastStore.addListener(this.updateCountyForecast);
	},
	updateSpot: function(){
		var spot = SpotStore.get(this.spotId);
		this.setState({spot: spot});
		WeatherActions.fetch(spot);
		CountyForecastActions.fetchSwell(spot);
	},
	updateForecast: function(){
		this.setState({ currentForecast: ForecastStore.getCurrent(this.spotId) });
	},
	updateWeather: function(){
		this.setState({ weather: WeatherStore.get(this.spotId)});
	},
	updateCountyForecast: function(){
		this.setState({countyForecast: CountyForecastStore.get(this.spotId)});
	}
};

module.exports = CurrentForecastState;