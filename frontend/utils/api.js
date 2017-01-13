export default {
	fetchSpotForecast: id => $.get(`api/spots/${id}/forecast`),
	fetchCountyForecast: county => $.get(`api/counties/${county}/forecast`)
}