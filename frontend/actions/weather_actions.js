var AppDispatcher = require("../stores/dispatcher");
var WeatherApiUtil = require("../utils/weather_api_util");

var WeatherActions = {
	fetch(lat, lng, spotId) {
		WeatherApiUtil.fetch(lat, lng, this.receive.bind(null, spotId));
	},
	receive(spotId, data){
		var weather = {
			temp: data.main.temp,
			wind: {
				dir: data.wind.deg,
				speed: data.wind.speed
			},
			desc: data.weather.map(function(entry){ return entry.main; })
		};
		console.log(spotId, weather);
		// AppDispatcher.dispatch({
		// 	actionType: "RECEIVE_SPOT_FORECAST",
		// 	spot: spotId,
		// 	weather: weather
		// });
	}
};

module.exports = WeatherActions;