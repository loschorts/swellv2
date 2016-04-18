// Caution: This module breaks if null values are involved! Use undefined instead!!!

module.exports = {
	exists: function(objectNameAsString){
		var scope = this;
		var result = true;
		var levels = objectNameAsString.split(".");

		if (levels[0] === "this") {
			levels = levels.slice(1);
		}

		levels.some(function(level){
			if (typeof scope[level] === 'undefined') {
				result = false;
				return true;
			} else {
				scope = scope[level];
			}
		});

		return result;
	},
	returnIf: function(objectNameAsString, valueIfUndefined = null){
		var scope = this;
		var result;
		var levels = objectNameAsString.split(".");

		if (levels[0] === "this") {
			levels = levels.slice(1);
		}

		levels.some(function(level){
			if (typeof scope[level] === 'undefined') {
				result = undefined;
				return true;
			} else {
				scope = scope[level];
				result = scope;
			}
		});

		if (typeof result === 'undefined') {
			result = valueIfUndefined;
		}

		return result;
	},
};