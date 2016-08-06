class Favorite < ActiveRecord::Base
	validates :user_id, presence: true
	validates :spot_id, presence: true
	validates :spot_id, uniqueness: {scope: :user_id}

	belongs_to :user
	belongs_to :spot

	def from_same_user
		Favorite.where(user_id: self.user_id)
	end

end
