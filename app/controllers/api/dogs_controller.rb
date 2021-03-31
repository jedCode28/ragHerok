class Api::DogsController < ApplicationController
	
	def index
	render json: Dog.available
	end

end
