class Api::SpotsController < ApplicationController
	def index
		if params[:name]
			name = params[:name].split.map(&:capitalize).join(" ")
			@item = Spot.find_by(name: name)
			if @item 
				render 'api/show'
			else
				render json: {message: "Spot not found. Ken: make this better"}, status: 404
			end
		else
			@collection = Spot.all
			render 'api/index'
		end
	end

	def feed
	end

	def show
		@item = Spot.find(params[:id])
		render 'api/show'
	end
end
