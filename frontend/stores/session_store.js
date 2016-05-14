var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser;

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	this.login(payload.user);
    	this.__emitChange();
      break;
    case "LOGOUT":
    	this.logout();
    	this.__emitChange();
      break;
  }
};

SessionStore.login = function(user){
	return _currentUser = user;
};

SessionStore.logout = function(){
	return _currentUser = undefined;
};

SessionStore.currentUser = function(){
	return _currentUser;
};

module.exports = SessionStore;