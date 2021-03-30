class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.float :price
      t.text :description
      t.string :breed
      t.belongs_to :seller, null: false, foreign_key: true

      t.timestamps
    end
  end
end
