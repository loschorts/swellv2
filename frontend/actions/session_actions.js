var SessionApiUtil = require("../utils/session_api_util");
var AppDispatcher = require("../stores/dispatcher");
var SessionActions = {
	query: function(){
		SessionApiUtil.query(this.update, this.error);
	},
	login: function(user){
		SessionApiUtil.login(user, this.update, this.error);
	},
	logout: function(){
		SessionApiUtil.logout(user, this.update, this.error);
	},
	update: function(response){
		AppDispatcher.dispatch({
			actionType: "RESET_SESSION_USER",
			user: response.user
		});
	},
	error: function(response){
		AppDispatcher.dispatch({
			actionType: "RESET_SESSION_ERROR",
			errors: response.responseJSON
		});
	}
};

module.exports = SessionActions;