# Swell

A swellular device for checking California surf forecasts.

http://surfswell.herokuapp.com

## Features

- Real daily forecasts for 150+ surf spots from Malibu to Mavericks.

- Live data for swell, wind, tide, air temp, water temp, and weather conditions.

- Colorized favorites on the home screen show overall conditions at a glance.

## Engineering Overview

- Built on Postgres/Rails/React/Redux.
- Heroku Hosting, Cloudinary CDN.
- Forecast data retrieved via Spitcast, Openweather APIs.
- Internal JSON API serving 25+ endpoints ranging from session creation to image retrieval.
- Automated seeding:
	- Spot location data seeded from Spitcast.
	- Custom scraper finds spot images via Google.

## Frontend Overview

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
	- [`frontend/utils/api.js`](./frontend/actions/api.js)
- **Feature Highlights**
	- **Color-coded thumbnails based on spot forecast conditions.** `Thumbnail` dispatches request for conditions and then changes header background to reflect condition quality.
		
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
- **Infinite highlights scroll:** `Collection` loads more thumbnails as the user scrolls to the bottom of the screen.

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

[thumbnail]: ./frontend/components/favorites.jsx
[favorites]: ./frontend/components/favorites.jsx
[collection]: ./frontend/components/collection.jsx

## Backend Highlights

## In Development

- Improved `DailyChart` with detail, scale.
- Image Gallery / Image Upload
- Recommendations / Best Spot Today
- Wetsuit Recommendations
- Forecast Widget for mixing into external sites.

## Known Issues

https://github.com/loschorts/swellv2/issues

Please help by raising any issues you encounter. Thanks!

