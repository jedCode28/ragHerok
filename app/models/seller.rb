class Seller < ApplicationRecord
	has_many :buyers
	has_many :dogs
end
