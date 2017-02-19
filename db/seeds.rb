require_relative './seeds_helper'

reset_tables

fetch_spots_remote(false) #change to true to hit the spitcast API for spots

create_regions
create_counties
create_spots

create_guest_account

Spot.where(name: "County Line").each do |spot|
	spot.update!(name: spot.name + " " + spot.county_name)
end