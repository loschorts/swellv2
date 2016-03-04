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
	loginUser: function(user){
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
	}
};