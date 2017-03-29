class AddImageToPatches < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :image, :string
  end
end
