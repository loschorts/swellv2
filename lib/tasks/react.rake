
namespace :react do 
	task new: :environment do |name|
		system "touch frontend/components/#{name}.jsx"
		system "touch app/assets/stylesheets/#{name}.css"
	end

	task destroy: :environment do |name|
		system "rm frontend/components/#{name}.jsx"
		system "rm app/assets/stylesheets/#{name}.css"
	end

	task test: :environment do 
		system "pwd"
		system "echo #{File.dirname(__F1ILE__)}"
	end
end