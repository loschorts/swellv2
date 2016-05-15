class Api::SpotsController < ApplicationController
	def index
		if params[:name]
			name = params[:name].split.map(&:capitalize).join(" ")
			@item = Spot.find_by(name: name)
			render 'api/show'
		else
			@collection = Spot.all
			render 'api/index'
		end
	end

	def show
		@item = Spot.find(params[:id])
		render 'api/show'
	end
end
