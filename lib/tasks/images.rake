require "httparty"
require 'set'
namespace :spot_images do 

	task search: :environment do |refresh|

		puts 'run rake :spot_images:update_list if new images have been created
		since the last time this was ran'

		system 'touch image_list.txt'
		already_have = Set.new

		File.readlines("image_list.txt").each do |image|
			rmatch = /^spots\/(.*)\//.match(image)
			already_have << rmatch[1] if rmatch
		end

		to_fetch = Spot.pluck(:name).to_a - already_have.to_a

		list = to_fetch.map {|n| "\"" + n + "\" "}.join 

		puts "attempting to fetch #{to_fetch.count}..."
		debugger
		system "node lib/image_scraper.js #{list}"
	end

	task :update_list do 
		system 'touch image_list.txt'
		puts 'fetching list...'
		File.write('image_list.txt', get_image_list.join("\n"))
		system 'cat image_list.txt'
	end

	task attach: :environment do
		system "node lib/get_image_urls.js"
	end

	task delete: :environment do 
		system "node lib/image_delete.js"
	end
end


def get_image_list(images = [], next_cursor = nil)

	res = HTTParty.get("https://#{Figaro.env.cloudinary_api_key}:#{Figaro.env.cloudinary_secret}@api.cloudinary.com/v1_1/#{Figaro.env.cloudinary_cloud_name}/resources/image", {query: {next_cursor: next_cursor, max_limit: 500}})

	res_hash = res.to_h
	images += res_hash["resources"].map {|x| x["public_id"]}

	res_hash["next_cursor"] ? get_image_list(images, res_hash["next_cursor"]) : images

end