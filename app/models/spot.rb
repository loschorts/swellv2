class Spot < ActiveRecord::Base
	validates :name, :spitcast_county, :county_name, :lat, :lng, :spitcast_id, presence: true
	validates :spitcast_id, uniqueness: true

	belongs_to :county, foreign_key: :spitcast_county, primary_key: :spitcast_county
	has_one :region, through: :county
	has_many :favorites
	has_many :images, as: :imageable

	def forecast
		{
			overview: self.overview,
			swell: self.swell,
			wind: self.wind,
			tide: self.tide,
			weather: self.weather,
			water_temp: self.water_temp
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
				size: hr["size_ft"]
			}
		end
	end

	def weather
		key = Figaro.env.weather_app_id
		
		HTTParty.get(url(:weather),
			{
				query: {
					appid: Figaro.env.weather_app_id,
					lat: lat,
					lon: lng,
					units: "imperial"
				}
			})
	end

	def swell
		HTTParty.get(url(:swell)).map do |hr|
			{
				time: hr["hour"],
				detail: (0..5).map do |sw|
					swell = hr[sw.to_s]
					if swell["dir"] && swell["hs"] && swell["tp"]
						{dir: swell["dir"], hs: swell["hs"], tp: swell["tp"]}
					else
						nil
					end
				end.compact,
				hst: hr["hst"]
			}
		end
	end

	def wind
		HTTParty.get(url(:wind)).map do |hr|
			{
				time: hr["hour"],
				deg: hr["direction_degrees"],
				dir: hr["direction_text"],
				speed: hr["speed_mph"]
			}
		end
	end

	def tide
		HTTParty.get(url(:tide)).map do |hr|
			{
				time: hr["hour"],
				height: hr["tide"],
			}
		end
	end

	def water_temp
		res = HTTParty.get(url(:water_temp))
		{
			temp: res["fahrenheit"],
			wetsuit: res["wetsuit"]
		}
	end

	private

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
