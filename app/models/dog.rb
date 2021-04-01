class Dog < ApplicationRecord
  belongs_to :seller

# SELECT d.id AS dog_id, d.name, d.price, d.description, d.breed, s.id AS seller_id, s.name, s.email
# FROM dogs AS d
# INNER JOIN sellers AS s ON s.id = d.seller_id
# ORDER BY s.id;

  def self.available
		select('d.id AS dog_id, d.name AS dog_name, d.price, d.description, d.breed, s.id AS seller_id, s.name, s.email')
    .from('dogs AS d')
    .joins('INNER JOIN sellers AS s ON s.id = d.seller_id')
    .order('s.id')
  end
end
