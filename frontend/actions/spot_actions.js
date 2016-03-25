var SpotApiUtil = require("../utils/spot_api_util");
var AppDispatcher = require("../stores/dispatcher");

var SpotActions = {
	fetch: function(id){
		SpotApiUtil.fetch(id, this.receive);
	},
	receive: function(spot){
		AppDispatcher.dispatch({
			actionType: "UPDATE_SPOT",
			spot: spot
		});
	}
};

module.exports = SpotActions;