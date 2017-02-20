class Favorite < ActiveRecord::Base
	validates :user_id, presence: true
	validates :spot_id, presence: true
	validates :spot_id, uniqueness: {scope: :user_id}

	belongs_to :user
	belongs_to :spot

	def from_same_user
		Favorite.where(user_id: self.user_id)
	end

	def self.toggle(user_id, spot_id)
		fav = Favorite.find_by(user_id: user_id, spot_id: spot_id)
		fav ? fav.destroy : Favorite.create(user_id: user_id, spot_id: spot_id)
	end

end
