var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var ForecastStore = new Store(AppDispatcher);

var LocalKey = require("../helpers/id_table").LocalKey;
var SpitcastKey = require("../helpers.id_table").SpitcastKey;

var _forecasts = {};
var _countyForecasts = {};

ForecastStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "UPDATE_SPOT":
    	ForecastStore.set(payload.spot);
    	ForecastStore.__emitChange();
      break;
  }
};

ForecastStore.set = function(forecast){
  _forecasts[LocalKey[forecast.spitcastId]] = forecast;
};

ForecastStore.get = function(id){
	return _forecasts[id];
};


module.exports = ForecastStore;