class PagesController < ApplicationController
	def splash
		@page_specific_stylesheet = ActionController::Base.helpers.asset_path("splash.css")
	end

	def app
		@page_specific_stylesheet = ActionController::Base.helpers.asset_path("app.css")
	end
end
