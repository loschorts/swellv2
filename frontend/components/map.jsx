var React = require("react");

var Map = React.createClass({
	// componentDidMount: function(){
 //    this.map = new google.maps.Map(document.getElementById('focus-map'), {
 //      center: {lat: this.props.lat, lng: this.props.lng},
 //      zoom: 8
 //  	});
 //  },
  componentWillReceiveProps: function(newProps){
  	if (newProps.lat && newProps.lng){
	  	this.map = new google.maps.Map(document.getElementById('focus-map'), {
	      center: {lat: newProps.lat, lng: newProps.lng},
	      zoom: 14,
	      mapTypeId: google.maps.MapTypeId.SATELLITE
	  	});
  	}
  },
	render: function(){
		return (
			<div id="focus-map">I am the Map</div>
			);
	}
});

module.exports = Map;