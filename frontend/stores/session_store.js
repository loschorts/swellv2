var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser;
var _errors;

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RESET_SESSION_USER":
    	this.setUser(payload.user);
    	this.__emitChange();
      break;
    case "RESET_SESSION_ERROR":
      this.setError(payload.errors);
      this.__emitChange();
      break;  
    }
};

SessionStore.setUser = function(user){
  _currentUser = user;
};

SessionStore.setError = function(errors){
  _errors = errors;
};

SessionStore.currentUser = function(){
	return _currentUser;
};

SessionStore.errors = function(){
  return _errors;
};

module.exports = SessionStore;