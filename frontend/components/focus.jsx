// libraries
var React = require("react");

// components
var Map = require("./map");
var Wind = require("./wind");
var Weather = require("./weather");
var Waves = require("./waves");

// mixins
var CurrentUserState = require("../modules/current_user_state");
var CurrentForecastState = require("../modules/current_forecast_state");
var CheckIfExists = require("../modules/check_if_exists");


window.fcs = require("../stores/forecast_store");

var Focus = React.createClass({
	mixins: [CurrentUserState, CurrentForecastState, CheckIfExists],
	render: function(){
		console.log(this.state);
		return (
			<div id="focus">
				<header id="focus-jumbotron">
					<div id="focus-container">
						<div id="focus-left">
							<Waves/>
						</div>
						<div id="focus-center">
							<div className="focus-blurb">
								<h1 className="spot-name" onClick={this.recenter}>
										{this.returnIf("state.spot.name")}
								</h1>
								<h2 className="shape-full">{this.returnIf("state.currentForecast.shape_full")}</h2>
								<h2 className="size">{this.returnIf("state.currentForecast.size")} ft</h2>	
							</div>
							<Weather
								temp={this.returnIf("state.weather.temp")}
								desc={this.returnIf("state.weather.desc")}
							/>
						</div>
						<div id="focus-right">
							<Wind
								speed={this.returnIf("state.weather.wind.speed")}
								dir={this.returnIf("state.weather.wind.dir")}/>
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
	},
	recenter: function(){
		this.forceUpdate();
	}
})

module.exports = Focus;