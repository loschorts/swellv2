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
- Internal JSON API serving 25+ endpoints ranging from session creation to image retrieval.
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
- Features
	- [Automated Image Seeding](./lib/tasks/images.rake) 
		- `images:search`: runs a [custom image scraper](./lib/image_scraper.js) that finds suitable google images and saves them to cloudinary CDN.
		- `images:attach`: attaches cloudinary images to `Spot` models based on name
		
		```rb
		namespace :images do 

			task search: :environment do

				already_have = Set.new

				get_image_list.each do |image|
					rmatch = /^spots\/(.*)\//.match(image)
					already_have << rmatch[1] if rmatch
				end

				to_fetch = Spot.pluck(:name).to_a - already_have.map{ |x| x.gsub("_", " ") }.to_a
				list = to_fetch.map {|n| "\"" + n + "\" "}.join 

				system "node lib/image_scraper.js #{list}"
			end

			task attach: :environment do
				get_image_list.each do |path|
					spotname = /^spots\/(.*)\//.match(path)
					if spotname
						name = spotname[1].gsub("_", " ")
						spot = Spot.find_by(name: name)
						Image.create(path: path, imageable: Spot.find_by(name: name))
					end
				end
			end
		end
		```
## In Development

- Improved performance of HTTP requests made server-side.
- Improved `DailyChart` with detail, scale.
- Image Gallery / Image Upload
- Recommendations / Best Spot Today
- Wetsuit Recommendations
- Forecast Widget for mixing into external sites.

## Issues

https://github.com/loschorts/swellv2/issues

Please help by raising any issues you encounter. Thanks!

