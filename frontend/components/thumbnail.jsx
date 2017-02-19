import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {now} from '../utils/selectors';

const colors = forecast => {
	if (forecast.indexOf("Poor") >= 0) return "blue";
	if (forecast.indexOf("Fair") >= 0) return "green";
	if (forecast.indexOf("Good") === 0) return "epic";
	if (forecast.indexOf("Good") >= 0) return "gold";
	if (forecast.indexOf("Epic") >= 0) return "epic";
	return "";
}

class Thumbnail extends React.Component {
	componentDidMount(){
		if (this.props.onMount) this.props.onMount();
	}
	render() {
		const {spot, img, double, forecastColors} = this.props;
		let color;
		if (forecastColors && spot.overview) {
			color = colors(now(spot.overview).overall)
		}
		return (
			<div 
				className={`thumbnail ${double ? "double" : ""}`} 
				style={{backgroundImage: img, backgroundSize: "cover"}}>
				<h3 className={color}><Link to={`/spots/${spot.id}`}>{spot.name}</Link></h3>
			</div>	
		);
	}
}

export default Thumbnail;