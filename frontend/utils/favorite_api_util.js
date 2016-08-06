var FavoriteApiUtil = {
	fetch: function(success, error){
		$.ajax({
			url: "/api/favorites",
			method: "GET",
			success: function(response){
				debugger
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
			data: {favorite: favorite},
			success: function(response){
				success(response);
			},
			error: function(response){
				error(response.responseJSON);
			}
		});
	},
	destroy: function(favorite, success, error){
		$.ajax({
			url: "/api/favorites/" + favorite.id,
			method: "DELETE",
			success: function(response){
				success(response);
			},
			error: function(response){
				error(response.responseJSON);
			}
		});
	},
};

module.exports = FavoriteApiUtil;