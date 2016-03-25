namespace :spitcast do
  desc "populate api/spitcast id table"
  task table: :environment do
  	table = {}
  	Spot.select(:spitcast_id).select(:id).map do |spot| 
  		table[spot.id] = spot.spitcast_id
		end
		File.write("./frontend/helpers/spitcast_id_table.js", JSON.generate(table), 17)
  end
end