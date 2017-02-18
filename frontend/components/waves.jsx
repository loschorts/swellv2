import React from "react";
import Conversions from "../helpers/conversions";

const compassImg = "http://res.cloudinary.com/swell/compass.png";

class Waves extends React.Component {
	render(){
		const {swell: {deg, hs, tp, dir}} = this.props;
		if ( swell ) {
			const style = {
				transform: `rotate(${deg}deg)`
			};
			return (
				<div className="waves-box">
					<h2>Primary Swell</h2>
					<img className="swell-arrow" src={compassImg} style={style}/>
					<div className="swell-item-info"> {dir} ({deg}°) @ {hs} ft, {tp} sec </div>
				</div>
			);
		} else {
			return <div className="waves-box"/>;
		}
	}
}

export default Waves;