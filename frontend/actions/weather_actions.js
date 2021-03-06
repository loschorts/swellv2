var AppDispatcher = require("../stores/dispatcher");
var WeatherApiUtil = require("../utils/weather_api_util");

var WeatherActions = {
	fetch(spot) {
		WeatherApiUtil.fetch(spot.lat, spot.lng, this.receive.bind(null, spot.id));
	},
	receive(spotId, data){
		var weather = {
			temp: data.main.temp,
			wind: {
				dir: data.wind.deg,
				speed: data.wind.speed
			},
			desc: data.weather[0].main,
			detail: data.weather[0].description
		};

		AppDispatcher.dispatch({
			actionType: "RECEIVE_WEATHER",
			spotId: spotId,
			weather: weather
		});
	}
};

module.exports = WeatherActions;