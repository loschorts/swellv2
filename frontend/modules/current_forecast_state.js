var SpotStore = require("../stores/spot_store");
var ForecastStore = require("../stores/forecast_store");
var SpotActions = require("../actions/spot_actions");
var ForecastActions = require("../actions/forecast_actions");

var CurrentForecastState = {
	componentDidMount: function(){
		SpotStore.addListener(this.update);
		ForecastStore.addListener(this.update);

		SpotActions.fetch(this.props.spotId);
		ForecastActions.fetch(this.props.spotId);
	},
	update: function(){
		this.setState({
			spot: SpotStore.get(this.props.spotId), 
			forecast: ForecastStore.getCurrent(this.props.spotId)
		});
	},
};

module.exports = CurrentForecastState;