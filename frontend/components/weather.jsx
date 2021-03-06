import React from 'react';

class Weather extends React.Component {
	render(){
		const { temp, waterTemp, tide, main, desc } = this.props;
		return (
			<div className="weather-box">
				<h2>Weather</h2>
				<div className="weather-components">
					<div className="weather-text">
						<h3>Air Temp: {temp}°</h3>
						<h3>Water Temp: {waterTemp}°</h3>
						<h3>
							<span>
							Tide: {tide.height} ft 
							<img 
								className="weather-tide-icon"
								src={iconFor(tide.dir)}/>
							</span>
						</h3>
					</div>
					<div className="weather-icon-container">
						<img className="weather-icon" src={iconFor(main)}/>
						<div>{desc}</div>
					</div>
				</div>
			</div>
		);
	}
}

const cloudinaryURL = "http://res.cloudinary.com/swell/";

const iconFor = desc => {
	let filename;
	switch(desc){
		case "Clouds":
			filename = "clouds.png"
			break;
		case "Rain":
			filename = "rain.png"
			break;
		case "Clear":
			const time = new Date(Date.now()).getHours();
			filename = time > 6 && time < 20 ? "sun.png" : "moon.png";
			break;
		case "Rising":
			filename = "up.png";
			break;
		case "Falling":
			filename = "down.png";
			break;
	}
	return cloudinaryURL + filename;
};

export default Weather;