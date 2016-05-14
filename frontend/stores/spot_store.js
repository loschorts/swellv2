var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var SpotStore = new Store(AppDispatcher);

var _spots = {};

SpotStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "UPDATE_SPOT":
    	this.set(payload.spot);
    	this.__emitChange();
      break;
    case "RECEIVE_WEATHER":
    	this.setWeather(payload.spotId, payload.weather);
    	this.__emitChange();
    	break;
  }
};

SpotStore.set = function(spot){
  _spots[spot.id] = spot;
};

SpotStore.setWeather = function(spotId, weather){
	_spots[spotId].weather = weather;
};

SpotStore.get = function(id){
  return _spots[id];
};

module.exports = SpotStore;