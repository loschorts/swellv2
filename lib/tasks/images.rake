require 'httparty'
require 'byebug'

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
			spot = /^spots\/(.*)\//.match(path)
			if spot
				name = spot[1].gsub("_", " ")
				Image.create!(path: path, imageable: Spot.find_by(name: name))
			end
		end
	end

	task delete: :environment do 
		system "node lib/image_delete.js"
	end

	task list: :environment do 
		result = get_image_list
		puts result, result.count { |x| x.include? "spots" }
	end

end


def get_image_list(images = [], next_cursor = nil)

	res = HTTParty.get("https://#{Figaro.env.cloudinary_api_key}:#{Figaro.env.cloudinary_api_secret}@api.cloudinary.com/v1_1/#{Figaro.env.cloudinary_cloud_name}/resources/image", {query: {next_cursor: next_cursor, max_results: 500}})

	res_hash = res.to_h
	images += res_hash["resources"].map {|x| x["public_id"]}

	res_hash["next_cursor"] ? get_image_list(images, res_hash["next_cursor"]) : images

end