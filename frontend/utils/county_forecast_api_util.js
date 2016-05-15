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
				callback(spot, waterTemp);
			}
		});		
	},
	fetchTide: function(spot, callback){
		$.ajax({
			url: "http://api.spitcast.com/api/county/tide/" + spot.spitcast_county + "/",
			type: "GET",
			success: function(tide){
				callback(spot, tide);
			}
		});				
	},

};

module.exports = CountyForecastApiUtil;