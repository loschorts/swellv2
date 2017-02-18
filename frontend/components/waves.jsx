import React from "react";
import Conversions from "../helpers/conversions";

const compassImg = "http://res.cloudinary.com/swell/compass.png";

class Waves extends React.Component {
	render(){
		const {overview} = this.props;
		if ( overview ) {
			const mainSwell = overview[0];
			const dir = Conversions.cardinal(mainSwell.dir + 180);
			const height = Conversions.imperial(mainSwell.hs);
			const period = mainSwell.tp;
			const style = {
				transform: "rotate(" + (mainSwell.dir + 180) + "deg)"
			};
			return (
				<div className="waves-box">
					<h2>Primary Swell</h2>
					<img className="swell-arrow" src={compassImg} style={style}/>
					<div className="swell-item-info"> {dir} @ {height} ft, {period} sec </div>
				</div>
			);
		} else {
			return <div className="waves-box"/>;
		}
	}

	swellItem(swellInfo){

	}
}

export default Waves;