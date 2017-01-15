var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var WeatherStore = new Store(AppDispatcher);

var _weather = {};

WeatherStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_WEATHER":
    	this.set(payload.spotId, payload.weather);
    	this.__emitChange();
    	break;
  }
};

WeatherStore.set = function(spotId, weather){
	_weather[spotId] = weather;
};

WeatherStore.get = function(spotId){
  return _weather[spotId];
};

module.exports = WeatherStore;