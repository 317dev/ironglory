class RemovePhotoFromPatches < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :photo, :string
  end
end
