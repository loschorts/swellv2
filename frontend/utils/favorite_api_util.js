var FavoriteApiUtil = {
	fetch: function(success, error){
		$.ajax({
			url: "/api/favorites",
			method: "GET",
			success: function(response){
				success(response);
			},
			error: function(response){
				error(response.responseJSON);
			}
		});
	},
	create: function(favorite, success, error){
		$.ajax({
			url: "/api/favorites",
			method: "POST",
			success: function(response){
				success(response);
			},
			error: function(response){
				error(response.responseJSON);
			}
		});
	}
};

module.exports = FavoriteApiUtil;