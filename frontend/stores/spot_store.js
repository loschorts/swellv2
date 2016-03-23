var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var SpotStore = new Store(AppDispatcher);

var LocalKey = require("../helpers/id_table").LocalKey;
var SpitcastKey = require("../helpers.id_table").SpitcastKey;

var _spots = {};

SpotStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "UPDATE_SPOT":
    	SpotStore.set(payload.spot);
    	SpotStore.__emitChange();
      break;
  }
};

SpotStore.set = function(spot){
  _spots[spot.id] = spot;
};

SpotStore.get = function(id){
  return _spots[id];
};

module.exports = SpotStore;