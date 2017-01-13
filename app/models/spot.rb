class Spot < ActiveRecord::Base
	validates :name, :spitcast_county, :county_name, :lat, :lng, :spitcast_id, presence: true
	validates :spitcast_id, uniqueness: true

	belongs_to :county, foreign_key: :spitcast_county, primary_key: :spitcast_county
	has_one :region, through: :county
	has_many :favorites
	has_many :images, as: :imageable
end