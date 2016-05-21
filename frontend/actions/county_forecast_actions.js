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
	},
	fetchTide: function(spot){
		CountyForecastApiUtil.fetchTide(spot, this.receiveTide);
	},
	receiveTide: function(spot, tide) {
		tide = tide.map(function(hour){
    	return {hour: hour.hour, tide: hour.tide};
    });

		AppDispatcher.dispatch({
			actionType: "RECEIVE_COUNTY_TIDE",
			spot: spot,
			tide: tide
		});
	},
	fetchWind: function(spot){
		CountyForecastApiUtil.fetchWind(spot, this.receiveWind);
	},
	receiveWind: function(spot, windForecast){
		AppDispatcher.dispatch({
			actionType: "RECEIVE_COUNTY_WIND",
			spot: spot,
			wind: windForecast
		});
	},


};

module.exports = CountyForecastActions;