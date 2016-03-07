var AppDispatcher = require('./dispatcher.js');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGIN":
    	UserStore.login(payload.user);
    	UserStore.__emitChange();
      break;
    case "LOGOUT":
    	UserStore.logout();
    	UserStore.__emitChange();
      break;
  }
};

UserStore.login = function(user){
	return _currentUser = user;
};

UserStore.logout = function(){
	return _currentUser = undefined;
};

UserStore.currentUser = function(){
	return _currentUser;
};

module.exports = UserStore;