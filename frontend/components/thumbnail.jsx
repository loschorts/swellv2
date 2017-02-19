import React from 'react';
import {connect} from 'react-redux';
import {fetchSpotOverview} from '../actions/spots'
import {Link} from 'react-router';

class Thumbnail extends React.Component {
	render() {
		const {spot, img, double} = this.props;
		return (
			<div 
				className={`thumbnail ${double ? "double" : ""}`} 
				style={{backgroundImage: img, backgroundSize: "cover"}}>
				<h3><Link to={`/spots/${spot.id}`}>{spot.name}</Link></h3>
			</div>	
		);
	}
}

const mapDispatch = {
	fetchSpotOverview
}

export default connect(null, mapDispatch)(Thumbnail);