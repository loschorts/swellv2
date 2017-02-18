export const getBy = (collection, key, val) => (
	collection.find(item => item[key] === val)
);

export const now = (forecast) => {
	return forecast[new Date().getHours()]
};