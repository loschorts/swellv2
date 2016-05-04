var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser;

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	SessionStore.login(payload.user);
    	SessionStore.__emitChange();
      break;
    case "LOGOUT":
    	SessionStore.logout();
    	SessionStore.__emitChange();
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