var React = require("React");

var DailyTideChart = React.createClass({
	getInitialState: function(){
		this.options = {
			color: "blue"
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
			return (el / max);
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
		var chartItems = chartParams.columns.map(function(col, i){
			style = {
				height: parseInt(col * 100) + "%",
				color: DailyTideChart.options.color
			};
			return (
				<div 
				key={"dtc" + i}
				className="daily-tide-chart-column"
				style={style} />
			);
		});

		return (
			<div id="daily-tide-chart">
			{chartItems}
			</div>
		);
	}
});

module.exports = DailyTideChart;