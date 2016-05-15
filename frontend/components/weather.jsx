var React = require("react");


var CheckIfExists = require("../modules/check_if_exists");
var cloudinaryURL = "http://res.cloudinary.com/swell/image/upload/";

var Weather = React.createClass({
	mixins: [CheckIfExists],
	render: function(){
		console.log(this.props);
		if (this.props.temp && this.props.desc && this.props.tide) {
			return (
				<div className="weather-box">
					<h2>Weather</h2>
					<div className="weather-components">
						<div className="weather-text">
							<h3>Air Temp: {this.props.temp}°</h3>
							<h3>Water Temp: {this.props.waterTemp}°</h3>
							<h3>Tide: {this.props.tide.level}, {this.props.tide.direction}</h3>
						</div>
						<div className="weather-icon-container">
							<img className="weather-icon" src={getURL(this.props.desc)}/>
							<div>{this.props.detail}</div>
						</div>
					</div>
				</div>
				);
		} else {
			return <div className="weather-box"/>
		}
	},
	conditions: function(){
	}
});

function getURL(desc){
	var filename;
	switch(desc){
		case "Clouds":
			filename = "clouds.png"
			break;
		case "Rain":
			filename = "rain.png"
			break;
		case "Clear":
			var time = new Date(Date.now()).getHours();
			filename = time > 6 && time < 20 ? "sun.png" : "moon.png";
			break;
	}
	return cloudinaryURL + filename;
};

module.exports = Weather;