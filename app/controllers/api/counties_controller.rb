class Api::CountiesController < ApplicationController
	def index
		render json: County.all
	end

	def show
		render json: this_county
	end

	def forecast
		render json: this_county.forecast
	end

	def photos
		render json: this_county.images
	end

	private
	def this_county
		County.find_by(spitcast_county: params[:id])
	end
end