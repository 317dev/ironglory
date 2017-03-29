class AddPhotoToPatches < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :photo, :string
  end
end
