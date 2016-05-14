var apiKey = "7fc03a03fe39e22c9557c07d4e05cb2d";

var WeatherApiUtil = {
	fetch: function(lat, lng, callback){
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather",
			data: {
				appid: apiKey,
				lat: lat,
				lon: lng,
				units: "imperial"
			},
			type: "GET",
			success: function(data){
				callback(data);
			}
		});
	}
};

module.exports = WeatherApiUtil;