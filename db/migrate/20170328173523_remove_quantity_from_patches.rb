class RemoveQuantityFromPatches < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :quantity, :integer
  end
end
