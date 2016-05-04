
namespace :react do 
	task new: :environment do |name|
		system "touch frontend/components/#{name}.jsx"
		system "touch app/assets/stylesheets/#{name}.scss"
	end

	task destroy: :environment do |name|
		system "rm frontend/components/#{name}.jsx"
		system "rm app/assets/stylesheets/#{name}.scss"
	end
end