var CountyForecastApiUtil = {
	fetchSwell: function(spot, callback){
		$.ajax({
			url: "http://api.spitcast.com/api/county/swell/" + spot.spitcast_county + "/",
			type: "GET",
			success: function(swellForecast){
				callback(spot, swellForecast);
			}
		});
	}

};

module.exports = CountyForecastApiUtil;