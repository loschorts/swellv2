class Api::SessionsController < ApplicationController

	def create
		@user = User.where(params[:user][:username], params[:user][:password])
		if @user
			login(@user)
			render 'api/users/show'
		else
			render {error: 'invalid-credentials'}, status: 422
		end
	end

	def destroy
		@user = current_user
		logout(@user)
		render 'api/users/show'
	end

end