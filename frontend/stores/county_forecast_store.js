var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var TimeHelper = require("../helpers/time_helper");

var CountyForecastStore = new Store(AppDispatcher);

var _byCounty = {};
var _bySpot = {};

CountyForecastStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_COUNTY_SWELL":
      this.ensure(payload.spot);
      this.setSwell(payload.spot, payload.swellForecast);
    	this.__emitChange();
      break;
  }
};

CountyForecastStore.ensure = function(spot) {
  _byCounty[spot.spitcast_county] = _byCounty[spot.spitcast_county] || {};
  _bySpot[spot.id] = _bySpot[spot.id] || {};
};

CountyForecastStore.setSwell = function(spot, swellForecast){
  _byCounty[spot.spitcast_county].swell = swellForecast;
  _bySpot[spot.id].swell = swellForecast;
};

CountyForecastStore.get = function(spotId) {
  return _bySpot[spotId];
};

CountyForecastStore.getCounty = function(spitcastCounty){
  return _byCounty[spitcastCounty];
};

module.exports = CountyForecastStore;