class AddCategoryIdToPatches < ActiveRecord::Migration[5.0]
  def change
    add_reference :patches, :category, foreign_key: true
  end
end
