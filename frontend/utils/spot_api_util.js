// var SpotActions = require("../actions/spot_actions");

var SpotApiUtil = {
	fetch: function(id, callback) {
		$.ajax({
			url: "/api/spots/" + id.toString(),
			type: "GET",
			success: function(spot){
				callback(spot);
			}
		});
	},
};

module.exports = SpotApiUtil;