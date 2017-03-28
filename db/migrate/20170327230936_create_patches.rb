class CreatePatches < ActiveRecord::Migration[5.0]
  def change
    create_table :patches do |t|
      t.string :name
      t.text :description
      t.string :sku
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
