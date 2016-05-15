var React = require("react");
var Conversions = require("../helpers/conversions");

var Waves = React.createClass({
	render: function(){
		if ( this.props.swell ) {
			return (
				<div className="waves-box">
					<h2>Swell</h2>
					{this.list()}
				</div>
			);
		} else {
			return <div className="waves-box"/>;
		}
	},
	list: function(){
		var swellList = [];
		var i = 0;
		while (this.props.swell[i]) {
			swellList.push(this.swellItem(this.props.swell[i]));
			i++;
		}
		return <div className="swell-list">{swellList}</div>;
	},
	swellItem: function(swellInfo){
		var dir = Conversions.cardinal(swellInfo.dir);
		var height = Conversions.imperial(swellInfo.hs);
		var period = swellInfo.tp;

		return (
			<div>{dir} @ {height}ft, {period} sec</div>
			);
	}
});

module.exports = Waves;