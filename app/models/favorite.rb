class Favorite < ActiveRecord::Base
	validates :user_id, presence: true
	validates :spot_id, presence: true
	validates :user_id, uniqueness: {scope: :spot_id}

	belongs_to :user
	belongs_to :spot
end
