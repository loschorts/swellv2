var React = require("react");

var DailyChart = React.createClass({
	configure: function(){
		var self = this;
		var values = this.props.data.map(function(el){
			return el[self.props.field];
		});
		var max = Math.max.apply(Math, values);
		var min = Math.min.apply(Math, values);

		var delta = max - min;

		var relativeHeights = values.map(function(el){
			return parseInt((el - min) / delta * 80 + 5) + "%";
		});

		var hours = this.props.data.map(function(el){
			return el.time;
		});

		return {
			max: max,
			min: min,
			values: values,
			columns: relativeHeights,
			hours: hours
		};
	},
	render: function(){
		var self = this;

		if (!this.props.data) {	
			return (<div className="daily-chart"/>);
		}

		var chartParams = this.configure();
		
		var chartItems = chartParams.columns.map(function(col, i){
			var now = (i == new Date().getHours()) ? " now" : "";

			var style = {
				height: col,
			};

			var hoverText = chartParams.values[i] + self.props.unit + " @ " + chartParams.hours[i];
			
			return (
				<div 
				key={"dtc" + i}
				className={"daily-chart-column" + now + " " + self.props.cssClass}
				style={style} >
				<span className="daily-chart-hover-span" title={hoverText}/>
				</div>
			);
		});

		return (
			<div className="daily-chart-wrapper">
				<h1><span>{self.props.title}</span></h1>
				<div className={"daily-chart " + self.props.cssClass}>
					{chartItems}
				</div>
			</div>
		);
	}
});

module.exports = DailyChart;