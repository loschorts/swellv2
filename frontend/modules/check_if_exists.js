module.exports = {
	exists: function(property){
		var result = this;
		var levels = property.split(".");

		if (levels[0] === "this") {
			levels = levels.slice(1);
		}

		for (var x in levels) {
			var level = levels[x];
			if (typeof result[level] === 'undefined') {
				return false;
			}
			result = result[level];
		}

		return true;
	},
	returnIf: function(property, defaultValue){
		var result = this;
		var levels = property.split(".");

		if (levels[0] === "this") {
			levels = levels.slice(1);
		}

		for (var x in levels) {
			var level = levels[x];
			if (typeof result[level] === "undefined"){
				return defaultValue;
			} else {	
				result = result[level];
			}
		}

		return result;
	}
};