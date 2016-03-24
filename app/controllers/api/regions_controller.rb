class Api::RegionsController < ApplicationController
	def index
		@collection = Region.all
		render 'api/index'
	end

	def show
		@item = Region.find(params[:id])
		render 'api/show'
	end
end
