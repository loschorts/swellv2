var React = require("react");


var CheckIfExists = require("../modules/check_if_exists");
var cloudinaryURL = "http://res.cloudinary.com/swell/image/upload/";

var Weather = React.createClass({
	mixins: [CheckIfExists],
	render: function(){
		if (this.exists("props.temp") && this.exists("props.desc")) {
			return (
				<div className="weather-box">
					<h2>Weather</h2>
					<div className="weather-components">
						<h3>Temp: {this.props.temp}°</h3>
						<img className="weather-icon" src={getURL(this.props.desc)}/>
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
	console.log(desc, filename);
	return cloudinaryURL + filename;
};

module.exports = Weather;