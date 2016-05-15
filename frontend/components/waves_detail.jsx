var React = require("react");

var Conversions = require("../helpers/conversions");
var arrowImg = "http://res.cloudinary.com/swell/compass_color.png";

var WavesDetail = React.createClass({
	swellList: function(){
		var list = [];
		var i = 0; 
		while (this.props.swell[i]) {
			var swell = this.props.swell[i];
			if (swell.dir && swell.hs && swell.tp) {
				list.push(this.swellItem(swell));
			}
			i++;
		}
		return (<div id="waves-detail-list">{list}</div>);
	},
	swellItem: function(swell){
		// dir, hs, tp
		var angle = (swell.dir + 180) % 360;
		var rotate = {
			transform: "rotate(" + angle + "deg)" 
		};
		var card = Conversions.cardinal(angle);
		var height = Conversions.imperial(swell.hs);
		return (
			<div className="waves-detail-item" key={"wdi" + swell.dir + swell.hs + swell.tp}>
				<img src={arrowImg} className="swell-detail-arrow" style={rotate}/>
				<div>{card} @ {height} ft, {swell.tp} sec</div>
			</div>
		);
	},
	render: function(){
		console.log(this.props);
		if (this.props.swell) {
			return (
				<div id="waves-detail">
				<h1>Swell Detail</h1>
				{this.swellList()}
				</div>
				);
		} else {
			return <div id="waves-detail"/>;
		}
	}
});

module.exports = WavesDetail;