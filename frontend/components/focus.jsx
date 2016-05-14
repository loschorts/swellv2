// libraries
var React = require("react");

// components
var Map = require("./map");

// mixins
var CurrentUserState = require("../modules/current_user_state");
var CurrentForecastState = require("../modules/current_forecast_state");
var CheckIfExists = require("../modules/check_if_exists");

var Focus = React.createClass({
	mixins: [CurrentUserState, CurrentForecastState, CheckIfExists],
	render: function(){
		console.log(this.state);
		return (
			<div id="focus">
				<header id="focus-jumbotron">
					<div id="focus-container">
						<div id="focus-header">
							<h1 className="spot-name">{this.returnIf("state.spot.name")}</h1>
							<h2 className="shape-full">{this.returnIf("state.currentForecast.shape_full")}</h2>
							<h2 className="size">{this.returnIf("state.currentForecast.size")} ft</h2>	
						</div>
					</div>
					<Map 
						lat={this.returnIf("state.spot.lat")} 
						lng={this.returnIf("state.spot.lng")}
					/>
				</header>
				
				<main id="focus-main" >
					<p>"Hello"</p>
					<p>"Hello"</p>
					<p>"Hello"</p>
					<p>"Hello"</p>
					<p>"Hello"</p>
					<p>"Hello"</p>
					<p>"Hello"</p>				
				</main>
			</div>
		);
	}
})

module.exports = Focus;