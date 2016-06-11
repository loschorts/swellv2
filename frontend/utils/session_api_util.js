var SessionStore = require("../stores/session_store");
var AppDispatcher = require('../stores/dispatcher');

var SessionApiUtil = {
	createUser: function(user, success, error){
		$.ajax({
			url: '/api/users',
			method: 'post',
			data: {user: user},
			success: success,
			error: error
		});
	},
	login: function(user, success, error){
		$.ajax({
			url: '/api/session',
			method: 'post',
			data: {user: user},
			success: success,
			error: error
		});
	},
	logout: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: success,
			error: error
		});
	},
	query: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'get',
			success: success,
			error: error
		});
	},
	guest: function(success, error){
		$.ajax({
			url: '/api/session/guest',
			method: 'get',
			success: success,
			error: error
		});
	}
};

module.exports = SessionApiUtil;