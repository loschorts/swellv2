class Spot < ActiveRecord::Base
	validates :name, :spitcast_county, :county_name, :lat, :lng, :spitcast_id, presence: true
	validates :spitcast_id, uniqueness: true

	belongs_to :county, foreign_key: :spitcast_county, primary_key: :spitcast_county
	has_one :region, through: :county
	has_many :favorites
	has_many :images, as: :imageable

	def forecast
		{
			overview: overview,
			swell: swell,
			wind: wind,
			tide: tide,
			weather: weather,
			water_temp: water_temp
		}
	end

	def overview
		HTTParty.get(url(:overview)).map do |hr|
			{
				time: hr["hour"], 
				overall: hr["shape_full"],
				swell: hr["shape_detail"]["swell"],
				wind: hr["shape_detail"]["wind"],
				tide: hr["shape_detail"]["tide"],
				size: hr["size_ft"].round(1)
			}
		end
	end

	def weather
		key = Figaro.env.weather_app_id
		
		res = HTTParty.get(url(:weather),
			{
				query: {
					appid: Figaro.env.weather_app_id,
					lat: lat,
					lon: lng,
					units: "imperial"
				}
			})
		{
			temp: res["main"]["temp"].to_i,
			main: res["weather"][0] ? res["weather"][0]["main"]: "",
			desc: res["weather"][0] ? res["weather"][0]["description"]: "",
			wind: {
				deg: res["wind"]["deg"].to_i,
				dir: text(res["wind"]["deg"]),
				speed: res["wind"]["speed"].round(1)
			}
		}
	end

	def swell
		HTTParty.get(url(:swell)).map do |hr|
			{
				time: hr["hour"],
				detail: (0..5).map do |sw|
					swell = hr[sw.to_s]
					if swell["dir"] && swell["hs"] && swell["tp"]
						{
							deg: (swell["dir"] + 180) % 360, #flip
							dir: text((swell["dir"] + 180) % 360), # text dir, e.g. 'WNW'
							hs: (swell["hs"] * 3.28).round(1), #covert to ft
							tp: swell["tp"]
						}
					else
						nil
					end
				end.compact,
				hst: (hr["hst"] * 3.28).to_i
			}
		end
	end

	def wind
		HTTParty.get(url(:wind)).map do |hr|
			{
				time: hr["hour"],
				deg: hr["direction_degrees"],
				dir: hr["direction_text"],
				speed: hr["speed_mph"].round(1)
			}
		end
	end

	def tide
		res = HTTParty.get(url(:tide))

		res = res.each_with_index.map do |hr, i| 
			{
				time: hr["hour"],
				height: hr["tide"].round(1),
				dir: hr["tide"] > res[i-1]["tide"] ? "Rising" : "Falling"
			}
		end

		res[0][:dir] = res[1][:dir] # add default value to the first hour

		res
	end

	def water_temp
		res = HTTParty.get(url(:water_temp))
		{
			temp: res["fahrenheit"],
			wetsuit: res["wetsuit"]
		}
	end

	private

	def text(deg)
		dirs = %w("N NNE NE ENE E ESE SE SSE S SSW SW WSW W WNW NW NNW")
		dirs[(deg / 22.5).to_i]
	end

	def url(request) 
		case request
		when :overview
			"http://api.spitcast.com/api/spot/forecast/#{self.spitcast_id}"	
		when :swell
			"http://api.spitcast.com/api/county/swell/#{self.spitcast_county}"			
		when :wind
			"http://api.spitcast.com/api/county/wind/#{self.spitcast_county}"			
		when :tide
			"http://api.spitcast.com/api/county/tide/#{self.spitcast_county}"			
		when :water_temp
			"http://api.spitcast.com/api/county/water-temperature/#{self.spitcast_county}"
		when :weather
			"http://api.openweathermap.org/data/2.5/weather"	
		else
		end
	end

end
