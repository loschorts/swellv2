class Api::FavoritesController < ApplicationController

	def create
		@favorite = Favorite.new(favorite_params)
		if @favorite.save
			render json: {
				favorites: @favorite.from_same_user.map(&:spot_id)
			}
		else
			render json: {errors: @favorite.errors.full_messages}, status: 422
		end
	end

	def toggle
		@user = current_user
		if @user
			Favorite.toggle(current_user.id, params[:spot_id])
			render "api/users/show"
		else
			render json: {errors: ["not logged in"]}, status: 422
		end
	end

	def index
		@favorites = current_user ? current_user.favorites : []
		render json: @favorites.map(&:spot_id)
	end

	def destroy 
		@favorite = Favorite.find(params[:id])
		if @favorite
			@user = @favorite.user
			@favorite.destroy
			render json: {
				favorites: @user.favorites
			}
		else
			render json: {errors: ["Couldn't find Favorite with Id: #{params[:id]}"]}, status: 422
		end
	end

	private

	def favorite_params
		params.require(:favorite).permit(:user_id, :spot_id)
	end
end
