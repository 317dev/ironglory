class AddQuantityToPatches < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :quantity, :integer
  end
end
