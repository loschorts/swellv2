// libraries
var React = require("react");

// components
var WeatherOverlay = require("./weather_overlay");

// stores
var SpotStore = require("../stores/spot_store");
var ForecastStore = require("../stores/forecast_store");

// api utils
var SpotApiUtil = require("../utils/spot_api_util");
// var ForecastApiUtil = require("../utils/forecast_api_util");

// actions
var SpotActions = require("../actions/spot_actions");
var ForecastActions = require("../actions/forecast_actions");

// modules 
var CurrentUserState = require("../modules/current_user_state");
var CheckIfExists = require("../modules/check_if_exists");

var Focus = React.createClass({
	mixins: [CurrentUserState],
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
	render: function(){
		return (
			<div id="focus" className="group">
				{JSON.stringify(this.state)}
			</div>
		);
	}
})

module.exports = Focus;