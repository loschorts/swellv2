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
import Favorite from './favorite';
import {fetchSpotForecast, fetchSpotWeather} from '../actions/spots';
import {toggleFavorite} from '../actions/session';
import {getBy, now} from '../utils/selectors';

const loader = "http://res.cloudinary.com/swell/image/upload/v1487570836/ripple.svg";

class Focus extends React.Component {
	componentDidMount(){
		const {id} = this.props.params;
		this.props.fetchSpotForecast(parseInt(id));
	}
	render(){
		const {params: {id}, spots, counties, toggleFavorite, currentUser} = this.props;
		const spot = getBy(spots, "id", parseInt(id));
		const forecast = spot.forecast;

		if (!forecast) return <div className="center"><img src={loader}/></div>

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
									<Favorite 
										toggleFavorite={toggleFavorite}
										spot={spot} 
										user={currentUser}/>
								</div>
							</div>
							<Weather
								temp={forecast.weather.temp}
								waterTemp={forecast.water_temp.temp}
								main={forecast.weather.main}
								desc={forecast.weather.desc}
								tide={now(forecast.tide)}
							/>
						</div>
						<div id="focus-right">
							<Wind
								speed={now(forecast.wind).speed}
								deg={now(forecast.wind).deg}
								dir={now(forecast.wind).dir}/>
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
							data={forecast.overview}
							field="size"
							title="Today's Wave Forecast"
							cssClass="wave"
							unit="ft"
						/>
						<DailyChart 
							data={forecast.tide}
							field="height"
							title="Today's Tide"
							cssClass="tide"
							unit="ft"
						/>
						<DailyChart 
							data={forecast.wind}
							field="speed"
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
const mapState = ({Session: {currentUser}, Spots, Counties}) => ({ spots: Spots, counties: Counties, currentUser });
const mapDispatch = ({fetchSpotForecast, fetchSpotWeather, toggleFavorite});

export default connect(mapState, mapDispatch)(Focus);