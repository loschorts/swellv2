var _directions = [ 
	"N", "NNE", "NE", "ENE", 
	"E", "ESE", "SE", "SSE", 
	"S", "SSW", "SW", "WSW", 
	"W", "WNW", "NW", "NNW"
	];

var Conversions = {
	cardinal: function(degrees){
		var idx = parseInt((degrees / 360).toFixed());
		return _directions[idx];
	},
	imperial: function(meters){
		var feet = meters * 3.28084;
		return parseInt((feet).toFixed());
	}
};

module.exports = Conversions;