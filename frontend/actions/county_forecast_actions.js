var CountyForecastApiUtil = require("../utils/county_forecast_api_util");
var AppDispatcher = require("../stores/dispatcher");

var CountyForecastActions = {
	fetchSwell: function(spot){
		CountyForecastApiUtil.fetchSwell(spot, this.receiveSwell);
	},
	receiveSwell: function(spot, swellForecast){
		AppDispatcher.dispatch({
			actionType: "RECEIVE_COUNTY_SWELL",
			spot: spot,
			swellForecast: swellForecast
		});
	}

};

module.exports = CountyForecastActions;