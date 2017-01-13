class Spot < ActiveRecord::Base
	validates :name, :spitcast_county, :county_name, :lat, :lng, :spitcast_id, presence: true
	validates :spitcast_id, uniqueness: true

	belongs_to :county, foreign_key: :spitcast_county, primary_key: :spitcast_county
	has_one :region, through: :county
	has_many :favorites
	has_many :images, as: :imageable

	def forecast
		url = "http://api.spitcast.com/api/spot/forecast/#{self.spitcast_id}"

		HTTParty.get(url).map do |hr|
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
		
		HTTParty.get(
			"http://api.openweathermap.org/data/2.5/weather",
			{
				query: {
					appid: Figaro.env.weather_app_id,
					lat: lat,
					lon: lng,
					units: "imperial"
				}
			}
		)
	end

end
