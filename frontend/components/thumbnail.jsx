import React from 'react';
import {Link} from 'react-router';

const Thumbnail = ({spot, double}) => (
	<div 
		className={`thumbnail ${double ? "double" : ""}`} 
		style={imageFor(spot)}>
		<h3><Link to={`/spots/${spot.id}`}>{spot.name}</Link></h3>
	</div>	
);

const randomFrom = array => array[Math.floor(Math.random() * array.length)]

const url = img => `url(http://res.cloudinary.com/swell/image/upload/c_scale,h_600/${img.path})`

const imageFor = spot => ({
	backgroundImage: url(randomFrom(spot.images))
});

export default Thumbnail;