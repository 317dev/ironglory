class AddFeaturedToPatches < ActiveRecord::Migration[5.0]
  def change
    add_column :patches, :featured, :boolean, default: false
  end
end
