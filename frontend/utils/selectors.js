export const getBy = (collection, key, val) => {
	if (val.constructor === Array) {
		return collection.filter(item => val.find(v => v === item[key]))
	} else {
		return collection.find(item => item[key] === val)		
	}
};

export const now = (forecast) => {
	return forecast[new Date().getHours()]
};

const randomFrom = array => array[Math.floor(Math.random() * array.length)];

const url = img => `url(http://res.cloudinary.com/swell/image/upload/c_scale,h_600/${img.path})`;

export const imageFor = spot => {
	const randImg = randomFrom(spot.images);
	return randImg ? url(randImg) : console.log(`${spot.name} has no pics`);
};