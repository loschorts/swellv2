class Region < ActiveRecord::Base
	validates :name, :description, presence: true, unique: true
	has_many :counties
	has_many :spots, through: :counties
end
