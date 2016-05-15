var React = require("react");

var cardinal = require("../helpers/conversions").cardinal;

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

		return (
			<div className="waves-detail-item">
			{swell.dir} {swell.hs} {swell.tp}
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