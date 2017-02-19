class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
		user = User.find(params[:id])
		render json: user.as_json.merge({favorites: user.favorite_spots})
	end

	def guest
		@user = User.new_guest
		login(@user)
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :email, :password)
	end

end