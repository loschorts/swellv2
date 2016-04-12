PACKAGES = [
	"babel-core",
	"babel-loader",
	"babel-preset-es2015",
	"babel-preset-react",
	"flux",
	"install",
	"npm",
	"react",
	"react-addons-linked-state-mixin",
	"react-dom",
	"react-router",
	"webpack"
]

namespace :npm do
  desc "install necessary node modules"
  task install: :environment do
  	PACKAGES.each do |package|
  		system "npm install --save #{package}"
  	end
  end
end