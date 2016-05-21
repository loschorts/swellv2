var React = require("react");

var TimeHelper = require("../helpers/time_helper");

var DailyTideChart = React.createClass({
	configure: function(){

		var heights = this.props.data.map(function(el){
			return el.tide;
		});
		var max = Math.max.apply(Math, heights);
		var min = Math.min.apply(Math, heights);
		var delta = max - min;
		var relativeHeights = heights.map(function(el){
			return parseInt((el - min) / delta * 80 + 5) + "%";
		});

		var hours = this.props.data.map(function(el){
			return el.hour;
		});

		return {
			max: max,
			min: min,
			heights: heights,
			columns: relativeHeights,
			hours: hours
		};
	},
	render: function(){
		if (!this.props.data) {	
			return (<div className="daily-chart"/>);
		}

		var chartParams = this.configure();
		
		console.log(chartParams.columns);

		var chartItems = chartParams.columns.map(function(col, i){
			var now = TimeHelper.convert(new Date());
			var now = chartParams.hours[i] == now ? " now" : "";

			var style = {
				height: col,
			};

			var hoverText = chartParams.heights[i].toFixed(2) + "ft @ " + chartParams.hours[i];
			
			return (
				<div 
				key={"dtc" + i}
				className={"daily-chart-column" + now}
				style={style} >
				<span className="daily-chart-hover-span" title={hoverText}/>
				</div>
			);
		});

		return (
			<div className="daily-chart-wrapper">
				<h1><span>Today's Tides</span></h1>
				<div className="daily-chart">
					{chartItems}
				</div>
			</div>
		);
	}
});

module.exports = DailyTideChart;