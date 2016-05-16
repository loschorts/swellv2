var React = require("React");

var DailyTideChart = React.createClass({
	getInitialState: function(){
		this.options = {
			color: "#1F7794"
		};
		return null;
	},
	configure: function(){
		var max = Math.max.apply(Math, this.props.data);
		var min = Math.min.apply(Math, this.props.data);
		var delta = max - min;

		max = Math.max(max, 1);

		var relativeHeights = this.props.data.map(function(el){
			el = el || (min + (delta / 2));
			return (el / (max * 1.25));
		});	

		return {
			max: max,
			min: min,
			delta: delta,
			columns: relativeHeights
		};
	},
	render: function(){
		console.log(this.props.data);
		if (!this.props.data) {	return (<div id="daily-tide-chart"/>); } 

		var chartParams = this.configure();
		var self = this;
		var chartItems = chartParams.columns.map(function(col, i){
			var style = {
				width: "3%",
				height: parseInt(col * 90) + "%",
			};
			return (
				<div 
				key={"dtc" + i}
				className="daily-tide-chart-column"
				style={style} >
				<span className="daily-tide-chart-hover-span" title="hover"/>
				</div>
			);
		});

		return (
			<div id="daily-tide-chart-wrapper">
				<h1>Today's Tides</h1>
				<div id="daily-tide-chart">
				{chartItems}
				</div>
			</div>
		);
	}
});

module.exports = DailyTideChart;