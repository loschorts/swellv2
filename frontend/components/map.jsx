var React = require("react");

var Map = React.createClass({
	componentDidMount: function(){
	  	this.map = new google.maps.Map(document.getElementById('focus-map'), {
	      center: {lat: this.props.lat, lng: this.props.lng},
	      zoom: 17,
	      mapTypeId: google.maps.MapTypeId.SATELLITE,
	      disableDefaultUI: true,
	      scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: true,
	  	});
  },
  componentWillReceiveProps: function(newProps){
  	if (newProps.lat && newProps.lng){
	  	this.map = new google.maps.Map(document.getElementById('focus-map'), {
	      center: {lat: newProps.lat, lng: newProps.lng},
	      zoom: 17,
	      mapTypeId: google.maps.MapTypeId.SATELLITE,
	      disableDefaultUI: true,
	      scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: true,
	  	});
  	}
  },
	render: function(){
		return (
			<div id="focus-map"/>
			);
	}
});

module.exports = Map;