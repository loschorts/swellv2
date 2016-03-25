var ForecastApiUtil = require("../utils/forecast_api_util");
var AppDispatcher = require("../stores/dispatcher");

var ForecastActions = {
	fetch: function(id){
		ForecastApiUtil.fetch(id, this.receive);
	},
	receive: function(id, forecast){
		AppDispatcher.dispatch({
			actionType: "UPDATE_FORECAST",
			id: id,
			forecast: forecast
		});
	}
};
module.exports = ForecastActions;