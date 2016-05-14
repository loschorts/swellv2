var apiKey = 7fc03a03fe39e22c9557c07d4e05cb2d;

var WeatherApiUtil = {
	fetch: function(lat, lng, callback){
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=" + apiKey,
			type: "GET",
			success: function(data){
				callback(data);
			}
		});
	}
};

module.exports = WeatherApiUtil;