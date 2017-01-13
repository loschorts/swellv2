class Api::SpotsController < ApplicationController
	def index
		render json: Spot.includes(:images).as_json(include: :images)
	end

	def show
		render json: this_spot
	end

	def forecast
		render json: this_spot.forecast
	end

	def weather
		render json: this_spot.weather
	end

	def photos
		render json: this_spot.images
	end


	private

	def this_spot
		Spot.find(params[:id])
	end

end
