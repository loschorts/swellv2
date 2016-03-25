var UserStore = require("../stores/user_store");
var AppDispatcher = require('../stores/dispatcher');
var UserApiUtil = {
	createUser: function(user){
		$.ajax({
			url: '/api/users',
			method: 'post',
			data: {user: user},
			success: function(response){
				AppDispatcher.dispatch({
					actionType: "LOGIN",
					user: response
				});
			},
			error: function(error){
			}
		});
	},
	login: function(user){
		$.ajax({
			url: '/api/session',
			method: 'post',
			data: {user: user},
			success: function(data){
				AppDispatcher.dispatch({
					actionType: "LOGIN",
					user: data
				});
			},
			error: function(error){
			}
		});
	},
	logout: function(){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: function(data){
				AppDispatcher.dispatch({
					actionType: "LOGOUT"
				});
			},
			error: function(error){
			}
		});
	},
	fetchCurrentUser: function(){
		$.ajax({
			url: '/api/session',
			method: 'get',
			success: function(data){
				AppDispatcher.dispatch({
					actionType: "LOGIN",
					user: data
				});
			},
			error: function(error){
			}
		});
	},
	guestLogin: function(){
		this.login({username: "guest", password: "password"});
	}
};

module.exports = UserApiUtil;