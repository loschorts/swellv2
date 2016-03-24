class County < ActiveRecord::Base
	validates :name, :spitcast_county, :region_id, presence: true
	
	has_many :spots, foreign_key: :spitcast_county, primary_key: :spitcast_county
	belongs_to :region
end
