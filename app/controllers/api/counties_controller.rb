class Api::CountiesController < ApplicationController
	def index
		@collection = County.all
		render 'api/index'
	end

	def show
		@item = County.find(params[:id])
		render 'api/show'
	end
end