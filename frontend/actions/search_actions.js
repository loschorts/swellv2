var browserHistory = require("react-router").browserHistory;

var SearchActions = {
	fetch: function(spotName){
		$.ajax({
			url: "/api/spots/",
			data: {name: spotName},
			success: SearchActions.receive,
			error: SearchActions.error
		});
	},
	receive: function(spot){
		browserHistory.push("/spot/" + spot.id);
		window.scrollTo(0, 0);
	},
	error: function(error){
		alert(JSON.stringify(error.responseJSON.message));
	}
};

module.exports = SearchActions;