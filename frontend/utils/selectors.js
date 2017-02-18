export const getBy = (collection, key, val) => (
	collection.find(item => item[key] === val)
);
