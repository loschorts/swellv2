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
	},
	fetchWaterTemp: function(spot){
		CountyForecastApiUtil.fetchWaterTemp(spot, this.receiveWaterTemp);
	},
	receiveWaterTemp: function(spot, waterTemp) {
		AppDispatcher.dispatch({
			actionType: "RECEIVE_COUNTY_WATER_TEMP",
			spot: spot,
			waterTemp: waterTemp
		});
	}


};

module.exports = CountyForecastActions;