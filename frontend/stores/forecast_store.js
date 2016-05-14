var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var TimeHelper = require("../helpers/time_helper");

var ForecastStore = new Store(AppDispatcher);

var _forecasts = {};
var _countyForecasts = {};

ForecastStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "UPDATE_FORECAST":
    	this.set(payload.id, payload.forecast);
    	this.__emitChange();
      break;
  }
};

ForecastStore.set = function(id, forecast){
  _forecasts[id] = forecast;
};

ForecastStore.getFull = function(id){
	return _forecasts[id];
};

ForecastStore.getCurrent = function(id){
	if (!_forecasts[id]) { return; }
	var now = TimeHelper.convert(new Date());
	return _forecasts[id].find(function(segment){
		return segment.hour == now;
	});
};


module.exports = ForecastStore;