var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var TimeHelper = require("../helpers/time_helper");

var CountyForecastStore = new Store(AppDispatcher);

var _byCounty = {};
var _bySpot = {};

window.bySpot = _bySpot;
window.cfs = CountyForecastStore;

CountyForecastStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_COUNTY_SWELL":
      this.ensure(payload.spot);
      this.setSwell(payload.spot, payload.swellForecast);
    	this.__emitChange();
      break;
    case "RECEIVE_COUNTY_WATER_TEMP":
      this.ensure(payload.spot);
      this.setWaterTemp(payload.spot, payload.waterTemp);
      this.__emitChange();
      break;
    case "RECEIVE_COUNTY_TIDE":
      this.ensure(payload.spot);
      this.setTide(payload.spot, payload.tide);
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

CountyForecastStore.getCurrentSwell = function(spotId){
  if (!_bySpot[spotId].swell) { return; }
  var now = TimeHelper.convert(new Date());
  return _bySpot[spotId].swell.find(function(segment){
    return segment.hour == now;
  });
};

CountyForecastStore.setWaterTemp = function(spot, waterTemp){
  _byCounty[spot.spitcast_county].waterTemp = waterTemp;
  _bySpot[spot.id].waterTemp = waterTemp;  
};

CountyForecastStore.getWaterTemp = function(spotId) {
  return _bySpot[spotId].waterTemp;
};

CountyForecastStore.setTide = function(spot, tide){
  _byCounty[spot.spitcast_county].tide = tide;
  _bySpot[spot.id].tide = tide; 
};

CountyForecastStore.getTide = function(spotId) {
  return _bySpot[spotId].tide;
};

CountyForecastStore.getCurrentTide = function(spotId){
  if (!_bySpot[spotId].tide) { return; }
  var now = TimeHelper.convert(new Date());
  var nowIdx = _bySpot[spotId].tide.findIndex(function(segment){
    return segment.hour == now;
  });

  var currentTide = _bySpot[spotId].tide[nowIdx];
  var nextTide = _bySpot[spotId].tide[nowIdx + 1];

  var direction = currentTide.tide <= nextTide.tide ? "Rising" : "Falling";
  return {level: currentTide.tide.toFixed(1) + "ft", direction: direction};
};

CountyForecastStore.getDailyTide = function(spotId) {
  if (!_bySpot[spotId].tide) { return; }
  var tides = _bySpot[spotId].tide;
  return tides.map(function(hour){
    return {hour: hour.hour, tide: hour.tide};
  });
};

CountyForecastStore.get = function(spotId) {
  return _bySpot[spotId];
};

CountyForecastStore.getCurrent = function(spotId) {
  return {
    swell: this.getCurrentSwell(spotId),
    waterTemp: this.getWaterTemp(spotId),
    tide: this.getCurrentTide(spotId)
  };
};

CountyForecastStore.getDaily = function(spotId) {
  return {
    tide: this.getDailyTide(spotId)
  };
};

CountyForecastStore.getCounty = function(spitcastCounty){
  return _byCounty[spitcastCounty];
};

module.exports = CountyForecastStore;