var SPITCAST_ID = require("../helpers/spitcast_id_table");

var ForecastApiUtil = {
	fetch: function(id, callback){
		$.ajax({
			url: "http://api.spitcast.com/api/spot/forecast/" + SPITCAST_ID[id] + "/",
			type: "GET",
			success: function(forecast){
				callback(id, forecast);
			}
		});
	}
};

module.exports = ForecastApiUtil;