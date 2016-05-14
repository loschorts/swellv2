class Api::SpotsController < ApplicationController
	def index
		@collection = Spot.all
		render 'api/index'
	end

	def show
		@item = Spot.find(params[:id]) || Spot.find(params[:name])
		render 'api/show'
	end
end
