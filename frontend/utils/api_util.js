module.exports = {
	createUser: function(user){
		$.ajax({
			url: 'api/users',
			method: 'post',
			data: {user: user},
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			}
		});
	},
	login: function(user){
		$.ajax({
			url: 'api/session',
			method: 'post',
			data: {user: user},
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			}
		});
	},
	logout: function(){
		$.ajax({
			url: 'api/session',
			method: 'delete',
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			}
		});
	},
	fetchCurrentUser: function(){
		$.ajax({
			url: 'api/session',
			method: 'get',
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			}
		});
	}
};