class Api::ImagesController < ApplicationController
	def random
		if params[:spot]
			spot = Spot.find_by(id: params[:spot]) || Spot.find_by(name: params[:spot])
			path = spot.images.shuffle.first.path
		else
			path = Image.order("Random()").first.path
		end
		render json: {path: path}
	end
end
