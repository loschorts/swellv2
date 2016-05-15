var TimeHelper = {
	convert: function(date){
		var hours = date.getHours();
		if (hours == 12) {
			return "12PM";
		}
		else if (hours > 12) {
			return hours % 12 + "PM";
		} 
		else if (hours == 0) {
			return "12AM";
		} else {
			return hours + "AM";
		}
	}
};

module.exports = TimeHelper;