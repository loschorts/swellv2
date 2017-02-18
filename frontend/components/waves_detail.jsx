var React = require("react");

var arrowImg = "http://res.cloudinary.com/swell/compass_color.png";

var WavesDetail = React.createClass({
	swellList: function(){
		const {swell} = this.props;
		const list = swell.map((e, i) => this.swellItem(e, i+1))		
		return (<div id="waves-detail-list">{list}</div>);
	},
	swellItem: function(swell, i){
		const {dir, deg, hs, tp} = swell;
		// deg, hs, tp
		const rotate = {
			transform: "rotate(" + deg + "deg)" 
		};
		return (
			<div className="waves-detail-item" key={"wdi" + i}>
				<span className="waves-detail-item-index">{i}</span>
				<img src={arrowImg} className="waves-detail-arrow" style={rotate}/>
				<div className="waves-detail-text">
					<h2>{dir}</h2>
					<p>{hs} ft @ {tp} sec</p>
				</div>
			</div>
		);
	},
	render: function(){
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