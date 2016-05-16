var React = require("React");

var TimeHelper = require("../helpers/time_helper");

var DailyTideChart = React.createClass({
	getInitialState: function(){
		this.options = {
			color: "#1F7794"
		};
		return null;
	},
	configure: function(){

		var heights = this.props.data.map(function(el){return el.tide});

		var max = Math.max.apply(Math, heights);
		var min = Math.min.apply(Math, heights);
		var delta = max - min;

		max = Math.max(max, 1);

		var relativeHeights = this.props.data.map(function(el){
			el.tide = el.tide || (min + (delta / 2));
			return (el.tide / (max * 1.25));
		});	

		var hours = this.props.data.map(function(el){
			return el.hour;
		});

		return {
			max: max,
			min: min,
			delta: delta,
			data: heights,
			columns: relativeHeights,
			hours: hours
		};
	},
	render: function(){
		console.log(this.props.data);
		if (!this.props.data) {	return (<div id="daily-tide-chart"/>); } 

		var chartParams = this.configure();
		var self = this;
		var chartItems = chartParams.columns.map(function(col, i){
			var now = TimeHelper.convert(new Date());
			var color = chartParams.hours[i] == now ? "#1e7b7b" : "";
			var style = {
				width: "3%",
				height: parseInt(col * 90) + "%",
				background: color
			};

			var hoverText = chartParams.data[i].toFixed(2) + "ft @ " + chartParams.hours[i];
			
			return (
				<div 
				key={"dtc" + i}
				className="daily-tide-chart-column"
				style={style} >
				<span className="daily-tide-chart-hover-span" title={hoverText}/>
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