var CountyForecastApiUtil = {
	fetchSwell: function(spot, callback){
		$.ajax({
			url: "http://api.spitcast.com/api/county/swell/" + spot.spitcast_county + "/",
			type: "GET",
			success: function(swellForecast){
				callback(spot, swellForecast);
			}
		});
	},
	fetchWaterTemp: function(spot, callback){
		$.ajax({
			url: "http://api.spitcast.com/api/county/water-temperature/" + spot.spitcast_county + "/",
			type: "GET",
			success: function(waterTemp){
				console.log(waterTemp);
				callback(spot, waterTemp);
			}
		});		
	}

};

module.exports = CountyForecastApiUtil;