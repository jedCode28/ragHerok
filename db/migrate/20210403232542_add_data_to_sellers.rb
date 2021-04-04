class AddDataToSellers < ActiveRecord::Migration[6.1]
  def change
    add_column :sellers, :avatar, :string
  end
end
