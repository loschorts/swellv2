// libraries
var React = require("react");

// components
var Map = require("./map");
var Wind = require("./wind");
var Weather = require("./weather");
var Waves = require("./waves");
var WavesDetail = require("./waves_detail");
var DailyChart = require("./daily_chart");

// mixins
var CurrentUserState = require("../modules/current_user_state");
var CurrentForecastState = require("../modules/current_forecast_state");
var CheckIfExists = require("../modules/check_if_exists");

var Focus = React.createClass({
	mixins: [CurrentUserState, CurrentForecastState, CheckIfExists],
	render: function(){
		return (
			<div id="focus">
				<div id="focus-jumbotron">
					<div id="focus-header">
						<div id="focus-left">
							<Waves swell={this.returnIf("state.currentCountyForecast.swell")}/>
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
								waterTemp={this.returnIf("state.currentCountyForecast.waterTemp.fahrenheit")}
								desc={this.returnIf("state.weather.desc")}
								detail={this.returnIf("state.weather.detail")}
								tide={this.returnIf("state.currentCountyForecast.tide")}
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
				</div>
				
				<main id="focus-main" >
					<div id="focus-main-left">
						<WavesDetail swell={this.returnIf("state.currentCountyForecast.swell")}/>
					</div>
					<div id="focus-main-right">
						<DailyChart 
							data={this.returnIf("state.fullForecast")}
							field="size_ft"
							title="Today's Wave Forecast"
							cssClass="wave"
						/>
						<DailyChart 
							data={this.returnIf("state.dailyCountyForecast.tide")}
							field="tide"
							title="Today's Tide Forecast"
							cssClass="tide"
						/>
						<DailyChart 
							data={this.returnIf("state.dailyCountyForecast.tide")}
							field="tide"
							title="Today's Wind Forecast"
							cssClass="wind"
						/>
					</div>
				</main>
			</div>
		);
	},
	recenter: function(){
		this.forceUpdate();
	}
})

module.exports = Focus;