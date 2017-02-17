import React from 'react';

class Spotlight extends React.Component{
	render(){
		return (
			<section id="spotlight">
				<div id="image-container">
					<img src="http://res.cloudinary.com/swell/image/upload/v1462425167/ruKkhOq_efxdug.jpg"/>
				</div>
				<div className="blurb">
					<h2> 
						Never miss an epic session. 
					</h2>
					<p>
						See live conditions, forecasts, and predicted surf quality to find the best spots near you.
					</p>
				</div>
			</section>
			);
	}
}

export default Spotlight;