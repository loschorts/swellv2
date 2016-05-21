var React = require("react");

var TimeHelper = require("../helpers/time_helper");

var DailyWavesChart = React.createClass({
	getInitialState: function(){
		this.options = {
			color: "#1F7794"
		};
		return null;
	},
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
			data: heights,
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

			var hoverText = chartParams.data[i].toFixed(2) + "ft @ " + chartParams.hours[i];
			
			return (
				<div 
				key={"dtc" + i}
				className={"daily-tide-chart-column" + now}
				style={style} >
				<span className="daily-tide-chart-hover-span" title={hoverText}/>
				</div>
			);
		});

		return (
			<div id="daily-tide-chart-wrapper">
				<h1><span>Today's Tides</span></h1>
				<div id="daily-tide-chart">
					{chartItems}
				</div>
			</div>
		);
	}
});

module.exports = DailyWavesChart;