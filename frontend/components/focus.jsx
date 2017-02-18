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
import {getBy, now} from '../utils/selectors';

class Focus extends React.Component {
	componentDidMount(){
		const {id} = this.props.params;
		this.props.fetchSpotForecast(parseInt(id));
	}
	render(){
		const {params: {id}, spots, counties} = this.props;
		const spot = getBy(spots, "id", parseInt(id));
		const forecast = spot.forecast;

		if (!forecast) return <div className="center"> loading... </div>

		return (
			<div id="focus">
				<div id="focus-jumbotron">
					<div id="focus-header">
						<div id="focus-left">
							<Waves swell={now(forecast.swell).detail[0]}/>
						</div>
						<div id="focus-center">
							<div className="focus-blurb">
								<div/>
								<div>
									<h1 className="spot-name" onClick={this.recenter}>
											{spot.name}
									</h1>
									<h2 className="shape-full">{now(forecast.overview).overall}</h2>
									<h2 className="size">
										{now(forecast.overview).size} ft
									</h2>
								</div>
							</div>
							<Weather
								temp={forecast.weather.temp}
								waterTemp={forecast.water_temp.temp}
								main={forecast.weather.main}
								desc={forecast.weather.desc}
								tide={now(forecast.tide).height}
							/>
						</div>
						<div id="focus-right">
							<Wind
								speed={now(forecast.wind).speed)}
								dir={now(forecast.wind).dir)}/>
						</div>
					</div>
					<Map 
						lat={spot.lat} 
						lng={spot.lng}
					/>
				</div>
				
				<main id="focus-main" >
					<div id="focus-main-left">
						<WavesDetail swell={now(forecast.swell).detail}/>
					</div>
					<div id="focus-main-right">
						<DailyChart 
							data={forecast.swell.map(e => e.hst)}
							field="size_ft"
							title="Today's Wave Forecast"
							cssClass="wave"
							unit="ft"
						/>
						<DailyChart 
							data={forecast.tide.map(e => e.height)}
							field="tide"
							title="Today's Tide Forecast"
							cssClass="tide"
							unit="ft"
						/>
						<DailyChart 
							data={forecast.wind.map(e => e.mph)}
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