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

	def photos
		render json: this_spot.images
	end

	def search
		if !params[:name].empty?
			matcher = "%#{params[:name]}%"
			render json: Spot.where("upper(name) like upper(?)", matcher)
			.select(:name, :id).limit(5)
		else
			render json: []
		end
	end


	private

	def this_spot
		Spot.find(params[:id])
	end

end
