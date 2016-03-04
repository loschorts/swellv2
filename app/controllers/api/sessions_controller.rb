class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(params[:user][:username], params[:user][:password])
		if @user
			login(@user)
			render 'api/users/show'
		else
			render json: nil, status: 422
		end
	end

	def destroy
		@user = current_user
		logout if @user
		render 'api/users/show'
	end

	def show
		@user = current_user
		if @user
			render 'api/users/show' 
		else
			render json: nil
		end
	end

end