var AppDispatcher = require("../stores/dispatcher");

var WeatherActions = {
	fetchForecast(lat, lng) {

	},
	receiveForecasts(weather){
		AppDispather.dispatch({
			actionType: "RECEIVE_SPOT_FORECAST",
			weather: weather
		})
	}
};

module.exports = WeatherActions;