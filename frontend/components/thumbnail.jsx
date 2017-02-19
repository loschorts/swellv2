import React from 'react';
import {Link} from 'react-router';

const Thumbnail = ({spot, img, double}) => (
	<div 
		className={`thumbnail ${double ? "double" : ""}`} 
		style={{background: img}}>
		<h3><Link to={`/spots/${spot.id}`}>{spot.name}</Link></h3>
	</div>	
);

export default Thumbnail;