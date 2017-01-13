class County < ActiveRecord::Base
	validates :name, :spitcast_county, :region_id, presence: true
	
	has_many :spots, foreign_key: :spitcast_county, primary_key: :spitcast_county
	belongs_to :region

	has_many :images, through: :spots, source: :images

	def forecast

		swell = HTTParty.get(url("swell"))
		wind = HTTParty.get(url("wind"))
		tide = HTTParty.get(url("tide"))
		water = HTTParty.get(url("water-temperature"))

		swell.count.times.map do |i|
			{
				hour: swell[i]["hour"],
				swell: swell[i].slice(*(0..5).map(&:to_s)).values,
				tide: tide[i]["tide"],
				wind: {
					dir: wind[i]["direction_degrees"],
					speed: wind[i]["speed_mph"]
				},
				water: water["fahrenheit"]
			}
		end
	end

	def water_temp
	end

	private

	def url(type)
		"http://api.spitcast.com/api/county/#{type}/#{self.spitcast_county}/"
	end


end
