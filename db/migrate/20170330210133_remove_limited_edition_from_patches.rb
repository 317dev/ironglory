class RemoveLimitedEditionFromPatches < ActiveRecord::Migration[5.0]
  def change
    remove_column :patches, :limited_edition, :boolean
  end
end
