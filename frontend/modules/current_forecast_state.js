var SpotStore = require("../stores/spot_store");
var ForecastStore = require("../stores/forecast_store");
var SpotActions = require("../actions/spot_actions");
var ForecastActions = require("../actions/forecast_actions");

var CurrentForecastState = {
	componentDidMount: function(){
		this.CurrentForecastStateSpotStoreListener = SpotStore.addListener(this.update);
		this.CurrentForecastStateForecastStoreListener = ForecastStore.addListener(this.update);

		SpotActions.fetch(this.props.spotId);
		ForecastActions.fetch(this.props.spotId);
	},
	componentWillUnmount: function(){
		this.CurrentForecastStateSpotStoreListener.remove();
		this.CurrentForecastStateForecastStoreListener.remove();
	},
	update: function(){
		this.setState({
			spot: SpotStore.get(this.props.spotId), 
			forecast: ForecastStore.getCurrent(this.props.spotId)
		});
	},
};

module.exports = CurrentForecastState;