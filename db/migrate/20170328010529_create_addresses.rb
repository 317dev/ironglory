class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :street_two
      t.string :city
      t.string :state
      t.integer :zip_code
      t.references :user, foreign_key: true
      t.references :order, foreign_key: true

      t.timestamps
    end
  end
end
