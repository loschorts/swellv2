import React from 'react';
import { randomImage } from '../utils/api';
window.randomImage = randomImage;

class Spotlight extends React.Component{
	constructor(){
		super()
		this.state = {src: ""}
	}
	componentDidMount(){
		randomImage().then(({path}) => this.setState({
			src: `http://res.cloudinary.com/swell/image/upload/c_scale,h_400/${path}`
		}))
	}
	render(){
		console.log(this.state.src)
		return (
			<section id="spotlight">
				<div className="image-container">
					<img src={this.state.src}/>
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