# Swell

A swellular device for checking California surf forecasts.

http://surfswell.herokuapp.com

## Features

- Real daily forecasts for 150+ surf spots from Malibu to Mavericks.

- Live, visualized data for swell, wind, tide, air temp, water temp, and weather conditions.

- Colorized favorites on the home screen show overall conditions at a glance.

## Engineering Overview

- Built on Postgres/Rails/React/Redux.
- Heroku Hosting, Cloudinary CDN.
- Forecast data retrieved via Spitcast, Openweather APIs.
- Internal JSON API serving 25+ endpoints ranging from session creation to forecast retrieval.
- Automated seeding:
	- Spot location data seeded from Spitcast.
	- Custom scraper finds spot images via Google.

### Frontend

-	Single-page rendering via React/ReactRouter/ReactRedux.
- Redux store with `Session`, `Spots`, `Search` reducers.
- Entry file: [`swell.jsx`](./frontend/swell.jsx)
- Major Components: 
	- [`Focus`](./frontend/components/focus.jsx)
		- [`Weather`](./frontend/components/weather.jsx)
		- [`Wind`](./frontend/components/wind.jsx)
		- [`WavesDetail`](./frontend/components/waves_detail.jsx)
		- [`DailyChart`](./frontend/components/daily_chart.jsx)
	- [`Home`](./frontend/components/home.jsx)
		- [`Favorites`][favorites]
		- [`Collection`][collection]
		- [`Thumbnail`][thumbnail]
- Key API files: 
	- [`frontend/actions/spots.js`](./frontend/actions/spots.js)
	- [`frontend/actions/session.js`](./frontend/actions/spots.js)
	- [`frontend/utils/api.js`](./frontend/utils/api.js)

[thumbnail]: ./frontend/components/thumbnail.jsx
[favorites]: ./frontend/components/favorites.jsx
[collection]: ./frontend/components/collection.jsx

#### Feature Highlights
##### Color-coded thumbnails based on spot forecast conditions. 
`Thumbnail` dispatches request for conditions and then changes header background to reflect condition quality.

```js
	// frontend/components/thumbnail.jsx
	class Thumbnail extends React.Component {
		componentDidMount(){
			if (this.props.onMount) this.props.onMount(); // fetches spot overview
		}
		render() {
			const {spot, img, double, forecastColors} = this.props;
			let color;
			if (forecastColors && spot.overview) {
				color = colors(now(spot.overview).overall)
			}
			return (
				<div 
					className={`thumbnail ${double ? "double" : ""}`} 
					style={{backgroundImage: img, backgroundSize: "cover"}}>
					<h3 className={color}><Link to={`/spots/${spot.id}`}>{spot.name}</Link></h3>
				</div>	
			);
		}
	}
	const colors = forecast => {
		if (forecast.indexOf("Poor") >= 0) return "blue";
		if (forecast.indexOf("Fair") >= 0) return "green";
		if (forecast.indexOf("Good") === 0) return "epic";
		if (forecast.indexOf("Good") >= 0) return "gold";
		if (forecast.indexOf("Epic") >= 0) return "epic";
		return "";
	}
```
##### Infinite highlights scroll

`Collection` loads more thumbnails as the user scrolls to the bottom of the screen.

```js
// frontend/components/collection.jsx
class Collection extends React.Component {
	...
	componentDidMount(){
		this.scrollEvent = $(window).scroll( () => {
		  if($(window).scrollTop() + $(window).height() == $(document).height()) {
	      this.addRows();
	   	}
		});
	}
	addRows(){
		const {show} = this.state;
		const {collection} = this.props;

		if (show === collection.length) return;

		if (show + 9 <= collection.length){
			this.setState({show: this.state.show + 9})
		} else {
			this.setState({show: collection.length})
		}
	}
}
```

### Backend

- Rails 5 Backend with PostgreSQL
- [DB Schema](./db/schema.rb)
- [Routes](./config/routes.rb)
- Key Models: 
	- [`Spot`](./app/models/spot.rb)
	- [`User`](./app/models/user.rb)
	- [`Favorite`](./app/models/favorite.rb)
- Key Controllers:
	- [`Spot`](./app/controllers/spots_controller.rb)
	- [`User`](./app/controllers/user_controller.rb)
#### Features
##### Seeding from Remote Data
	- [`seeds.rb`](./db/seeds.rb)
	- [`seeds_helper.rb`](./db/seeds_helper.rb)

Spot information is seeded by `fetch_spots_remote` in `seeds.rb`. `fetch_spots_remote` requests spots from the external Spitcast API, verifies their forecast data, and writes them to a text file for later parsing by `create_spots` method call in the seed file. 

Because the information retrieved rarely changes, `fetch_spots_remote` is easily toggleable, allowing the administrator to decide whether to run this network-heavy action when re-seeding the app.

##### Image Scraping
- Files: 
	- [`Images Rake`](./lib/images.rake)
	- [`Image Scraper`](./lib/images_scraper.js)

- Tasks:
	- `images:search`: runs a [custom image scraper](./lib/image_scraper.js) that finds suitable google images and saves them to cloudinary CDN.
	- `images:attach`: attaches cloudinary images to `Spot` models based on name

These image tasks completely automate the tedius and time-consuming task of finding suitable images with which to populate seed data for the image-heavy UX.

##### Spot Forecast Retrieval
- Files: 
	- [`Spot`](./app/models/spot.rb)
	- [`SpotsController`](./app/controllers/spots_controller.rb)

Spot forecasts are fetched and packaged server-side into an easily digestible object that is return to the client. This provides a convenient API hook (`api/spots/:id/forecast`) for client-side code. 

Prior to this implementation, forecast information was fetched client-side directly from the API. This had several drawbacks: 
- Info received was not packaged for easy consumption by the application, creating high demand for boilerplate formatting.
- Race conditions around dependent requests would lead to brittle code.
- Components would render piecemeal as information trickled in, resulting in amateurish UX.
- API keys were exposed to the client.

The current implementation solves all of these problems, but at a significant cost: By making requests synchronously on the server-side, forecast retrieval blocks the server from handling other requests (such as login/logout) for large chunks of time. Solution TBD, but some kind of concurrent implementation seems necessary.

## In Development

- Improve performance of HTTP requests made server-side.
- Improve `DailyChart` with detail, scale.
- Image Gallery / Image Upload
- Recommendations / Best Spot Today
- Wetsuit Recommendations
- Forecast Widget for mixing into external sites.
- Moveable Map on Focus page.
- Index Map labeling Spots on Home page.

## Issues

https://github.com/loschorts/swellv2/issues

Please help by raising any issues you encounter. Thanks!

