// libraries
import React from "react";
import {connect} from 'react-redux';

// components
import Map from "./map";
import Wind from "./wind";
import Weather from "./weather";
import Waves from "./waves";
import WavesDetail from "./waves_detail";
import DailyChart from "./daily_chart";

import {fetchSpotForecast, fetchSpotWeather} from '../actions/spots';
import {getBy} from '../utils/selectors';

class Focus extends React.Component {
	componentDidMount(){
		const {id} = this.props.params;
		this.props.fetchSpotForecast(parseInt(id));
	}
	render(){
		const {params: {id}, spots, counties} = this.props;
		const spot = getBy(spots, "id", parseInt(id));
		return <div/>;
		return (
			<div id="focus">
				<div id="focus-jumbotron">
					<div id="focus-header">
						<div id="focus-left">
							<Waves 
								swell={this.returnIf("state.currentCountyForecast.swell")}/>
						</div>
						<div id="focus-center">
							<div className="focus-blurb">
								<div/>
								<div>
									<h1 className="spot-name" onClick={this.recenter}>
											{this.returnIf("state.spot.name")}
									</h1>
									<h2 className="shape-full">{this.returnIf("state.currentForecast.shape_full")}</h2>
									<h2 className="size">
										{this.returnIf("state.currentForecast.size")} ft
									</h2>
									<Star spotId={parseInt(this.props.params.spotId)} />
								</div>
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
							unit="ft"
						/>
						<DailyChart 
							data={this.returnIf("state.dailyCountyForecast.tide")}
							field="tide"
							title="Today's Tide Forecast"
							cssClass="tide"
							unit="ft"
						/>
						<DailyChart 
							data={this.returnIf("state.dailyCountyForecast.wind")}
							field="speed_mph"
							title="Today's Wind Forecast"
							cssClass="wind"
							unit="mph"
						/>
					</div>
				</main>
			</div>
		);
	}
	recenter(){
		this.forceUpdate();
	}
}
const mapState = ({Spots, Counties}) => ({ spots: Spots, counties: Counties });
const mapDispatch = ({fetchSpotForecast, fetchSpotWeather});

export default connect(mapState, mapDispatch)(Focus);