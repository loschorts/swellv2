class Api::FavoritesController < ApplicationController

	def create
		@favorite = Favorite.new(favorite_params)
		if @favorite.save
			render json: {favorite: @favorite}
		else
			render json: {errors: @favorite.errors.full_messages}, status: 422
		end
	end

	def index
		@favorites = current_user ? current_user.favorites : []
		render json: @favorites
	end

	private

	def favorite_params
		params.require(:favorite).permit(:user_id, :spot_id)
	end
end
